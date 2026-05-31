import { useState, useEffect } from 'react'

// ── wind shear power law (fallback when 80m data absent) ──
const windAt80m = v10 => v10 * Math.pow(80 / 10, 0.143)
const mean = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0

function dateRange() {
  const end = new Date()
  end.setDate(end.getDate() - 7) // archive has ~5-7 day delay
  const start = new Date(end)
  start.setFullYear(start.getFullYear() - 1)
  const fmt = d => d.toISOString().slice(0, 10)
  return [fmt(start), fmt(end)]
}

async function geocode(query) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
    { headers: { 'Accept-Language': 'en' } }
  )
  const [hit] = await res.json()
  if (!hit) throw new Error('Location not found — try a more specific name or enter coordinates directly.')
  return { lat: +hit.lat, lon: +hit.lon, name: hit.display_name }
}

async function reverseGeocode(lat, lon) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      { headers: { 'Accept-Language': 'en' } }
    )
    const d = await res.json()
    return d.display_name || `${lat.toFixed(4)}°, ${lon.toFixed(4)}°`
  } catch {
    return `${lat.toFixed(4)}°, ${lon.toFixed(4)}°`
  }
}

async function fetchWind(lat, lon) {
  const [start, end] = dateRange()
  const url =
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}` +
    `&start_date=${start}&end_date=${end}` +
    `&hourly=wind_speed_10m,wind_speed_80m&wind_speed_unit=ms&timezone=UTC`
  const res = await fetch(url)
  const d = await res.json()
  if (d.error) throw new Error(d.reason || 'Wind data unavailable for this location.')
  const v10 = (d.hourly?.wind_speed_10m ?? []).filter(x => x != null)
  const v80 = (d.hourly?.wind_speed_80m ?? []).filter(x => x != null)
  const a10 = mean(v10)
  const a80 = v80.length ? mean(v80) : windAt80m(a10)
  return { avg10m: a10, avg80m: a80, points: v10.length, start, end }
}

// ── suitability engine ─────────────────────────────────────
function assess(avg80m) {
  const s = avg80m.toFixed(1)
  if (avg80m < 2.5) return {
    rating: 'Not Suitable',
    score: Math.round((avg80m / 2.5) * 15),
    bar: '#ef4444', cardBg: '#fef2f2', cardBorder: '#fecaca',
    badgeBg: '#fee2e2', badgeText: '#b91c1c',
    turbine: null,
    note: `Annual average wind speed at hub height is ${s} m/s — below the 2.5 m/s minimum for viable turbine operation. A solar-only or grid-connected system would be more cost-effective for this location.`,
  }
  if (avg80m < 3.5) return {
    rating: 'Marginal',
    score: Math.round(15 + ((avg80m - 2.5) / 1.0) * 20),
    bar: '#f97316', cardBg: '#fff7ed', cardBorder: '#fed7aa',
    badgeBg: '#ffedd5', badgeText: '#c2410c',
    turbine: 'AGN-1K',
    note: `Wind speed at hub height is ${s} m/s — above cut-in threshold but on the lower end. The AGN-1K (start-up: 1.8 m/s) is the best fit, ideally paired with a solar array for a reliable hybrid output.`,
  }
  if (avg80m < 5.0) return {
    rating: 'Good',
    score: Math.round(35 + ((avg80m - 3.5) / 1.5) * 35),
    bar: '#eab308', cardBg: '#fefce8', cardBorder: '#fde68a',
    badgeBg: '#fef9c3', badgeText: '#854d0e',
    turbine: 'AGN-3K',
    note: `Wind speed at hub height is ${s} m/s — a solid resource. The AGN-3K delivers excellent output at this wind regime in both on-grid and off-grid modes, with a strong return on investment.`,
  }
  return {
    rating: 'Excellent',
    score: Math.min(100, Math.round(70 + ((avg80m - 5.0) / 2.5) * 30)),
    bar: '#22c55e', cardBg: '#f0fdf4', cardBorder: '#bbf7d0',
    badgeBg: '#dcfce7', badgeText: '#15803d',
    turbine: 'AGN-5K',
    note: `Excellent wind resource — ${s} m/s at hub height. The AGN-5K will operate near rated capacity, delivering maximum generation with strong ROI on both standalone and grid-tied configurations.`,
  }
}

// ── sub-components ─────────────────────────────────────────
function Spinner() {
  return (
    <div className="flex flex-col items-center gap-4 py-14">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-primary/10" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
      </div>
      <p className="ag-normal-sm text-muted-foreground">Fetching 12 months of wind data…</p>
    </div>
  )
}

function StatBox({ label, value, unit, sub }) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 flex flex-col gap-1 text-center shadow-sm">
      <p className="ag-normal-sm text-muted-foreground">{label}</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="ag-h4 text-foreground leading-none">{value}</span>
        <span className="ag-normal-sm text-muted-foreground">{unit}</span>
      </div>
      {sub && <p className="ag-normal-sm text-muted-foreground leading-tight">{sub}</p>}
    </div>
  )
}

function AnimatedBar({ score, color }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(score), 80)
    return () => clearTimeout(t)
  }, [score])
  return (
    <div className="h-3 bg-white/80 rounded-full overflow-hidden border border-black/5">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, backgroundColor: color }}
      />
    </div>
  )
}

function ResultCard({ result }) {
  const info = assess(result.avg80m)
  return (
    <div
      className="mt-8 rounded-2xl border-2 p-6 md:p-8 shadow-sm"
      style={{ backgroundColor: info.cardBg, borderColor: info.cardBorder }}
      data-aos="fade-up"
    >
      {/* location header */}
      <div className="flex items-start gap-3 mb-7">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: info.badgeBg }}
        >
          <svg className="w-4 h-4" style={{ color: info.badgeText }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="ag-semi-bold text-foreground leading-snug break-words">{result.name}</p>
          <p className="ag-normal-sm text-muted-foreground mt-0.5">
            {result.lat.toFixed(4)}°, {result.lon.toFixed(4)}° &nbsp;·&nbsp;
            {result.points.toLocaleString()} hourly readings &nbsp;·&nbsp; {result.start} → {result.end}
          </p>
        </div>
      </div>

      {/* stat grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatBox label="Wind @ 10 m" value={result.avg10m.toFixed(1)} unit="m/s" sub="Anemometer ht." />
        <StatBox label="Wind @ 80 m" value={result.avg80m.toFixed(1)} unit="m/s" sub="Hub height" />
        <StatBox label="Suitability" value={info.score} unit="/ 100" />
        <div className="bg-white border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm">
          <p className="ag-normal-sm text-muted-foreground">Rating</p>
          <span
            className="px-3 py-1 rounded-full ag-medium-sm font-semibold"
            style={{ backgroundColor: info.badgeBg, color: info.badgeText }}
          >
            {info.rating}
          </span>
        </div>
      </div>

      {/* animated score bar */}
      <div className="mb-6">
        <AnimatedBar score={info.score} color={info.bar} />
        <div className="flex justify-between mt-1.5">
          <span className="ag-normal-sm text-muted-foreground">Not suitable</span>
          <span className="ag-normal-sm text-muted-foreground">Excellent</span>
        </div>
      </div>

      {/* turbine recommendation */}
      {info.turbine && (
        <div className="flex items-center gap-3 mb-5 p-3.5 bg-white/90 rounded-xl border border-white shadow-sm">
          <div className="w-9 h-9 rounded-full btn-gradient flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="ag-normal-sm text-muted-foreground">Recommended Aigon turbine</p>
            <p className="ag-semi-bold text-foreground">{info.turbine}</p>
          </div>
          <a
            href="/products"
            className="flex-shrink-0 px-4 py-1.5 btn-gradient text-white ag-medium-sm rounded-full"
          >
            View specs
          </a>
        </div>
      )}

      {/* assessment note */}
      <p className="ag-normal-base text-muted-foreground leading-relaxed">{info.note}</p>
    </div>
  )
}

// ── shared input style ─────────────────────────────────────
const inputCls =
  'w-full px-4 py-2.5 border border-border rounded-lg ag-normal-sm text-foreground ' +
  'placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors bg-white'

// ── main component ─────────────────────────────────────────
export default function WindChecker() {
  const [search, setSearch] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  async function handleSearch(e) {
    e.preventDefault()
    if (!search.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const geo = await geocode(search.trim())
      setLat(geo.lat.toFixed(5))
      setLon(geo.lon.toFixed(5))
      const wind = await fetchWind(geo.lat, geo.lon)
      setResult({ ...wind, lat: geo.lat, lon: geo.lon, name: geo.name })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleCoordCheck(e) {
    e.preventDefault()
    const la = parseFloat(lat)
    const lo = parseFloat(lon)
    if (isNaN(la) || isNaN(lo) || la < -90 || la > 90 || lo < -180 || lo > 180) {
      setError('Please enter valid coordinates (lat: −90 to 90, lon: −180 to 180).')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const name = await reverseGeocode(la, lo)
      const wind = await fetchWind(la, lo)
      setResult({ ...wind, lat: la, lon: lo, name })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-muted/30 py-16 border-b border-border overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div data-aos="fade-up">

          {/* heading */}
          <div className="mb-8">
            <p className="ag-medium-sm text-primary uppercase tracking-wider mb-2">Step 1 — Wind Assessment</p>
            <h2 className="ag-h4 text-foreground mb-2">Check Wind Feasibility</h2>
            <p className="ag-normal-base text-muted-foreground">
              Enter a place name or GPS coordinates to get an instant wind resource assessment
              powered by 12 months of real hourly meteorological data.
            </p>
          </div>

          {/* search by place name */}
          <form onSubmit={handleSearch} className="mb-4">
            <label className="ag-medium-sm text-foreground block mb-1.5">
              Search by place name
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="e.g. Kochi, Lakshadweep, Thar Desert, Coimbatore…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className={`${inputCls} pl-10`}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !search.trim()}
                className="px-5 py-2.5 btn-gradient text-white ag-medium-sm rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="ag-normal-sm text-muted-foreground px-1">or enter coordinates</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* lat / lon form */}
          <form onSubmit={handleCoordCheck}>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="ag-medium-sm text-foreground block mb-1.5">Latitude</label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 13.0827"
                  value={lat}
                  onChange={e => setLat(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="ag-medium-sm text-foreground block mb-1.5">Longitude</label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 80.2707"
                  value={lon}
                  onChange={e => setLon(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading || (!lat && !lon)}
              className="w-full sm:w-auto px-8 py-2.5 border-2 border-primary text-primary ag-medium-sm rounded-lg hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check Feasibility
            </button>
          </form>

          {/* loading */}
          {loading && <Spinner />}

          {/* error */}
          {!loading && error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 8v4m0 4h.01" />
              </svg>
              <p className="ag-normal-sm text-red-700">{error}</p>
            </div>
          )}

          {/* result */}
          {!loading && result && <ResultCard result={result} />}

          {/* scroll-down nudge after result */}
          {!loading && result && (
            <p className="mt-5 ag-normal-sm text-muted-foreground text-center">
              Scroll down to fill in your details and request a full feasibility review from our team ↓
            </p>
          )}

        </div>
      </div>
    </section>
  )
}
