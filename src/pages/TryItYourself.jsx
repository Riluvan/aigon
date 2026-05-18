import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import PageFooter from '../components/PageFooter'
import CircleCheck from '../assets/CircleCheck.svg'
import { sendFeasibilityEmail } from '../lib/emailjs'

const siteTypes = [
  'Coastal Area', 'Hill Station', 'Urban / Suburban', 'Industrial Zone', 'Remote / Rural', 'Other',
]

const propertyTypes = [
  'Resort / Hotel', 'Educational Institution', 'Industry / Corporate Campus',
  'Telecom Tower / Defence', 'Hospital / Healthcare', 'Residential',
  'Fish Processing / Prawn Farm', 'Other',
]

const billRanges = [
  'Below ₹5,000 / month', '₹5,000 – ₹15,000 / month', '₹15,000 – ₹50,000 / month',
  '₹50,000 – ₹1,00,000 / month', 'Above ₹1,00,000 / month',
]

const powerGoals = [
  { id: 'reduce-bill',  label: 'Reduce electricity bill' },
  { id: 'backup',       label: '24×7 uninterrupted power' },
  { id: 'go-green',     label: 'Go green / ESG compliance' },
  { id: 'grid-export',  label: 'Export surplus to grid' },
  { id: 'off-grid',     label: 'Replace diesel / go off-grid' },
]

const installModes = ['On-Grid', 'Off-Grid', 'Hybrid', 'Not Sure']

const budgetRanges = [
  'Below ₹2 Lakh', '₹2 – ₹5 Lakh', '₹5 – ₹15 Lakh', '₹15 – ₹50 Lakh', 'Above ₹50 Lakh', 'Not decided yet',
]

const inputCls = 'w-full px-4 py-2.5 border border-border rounded-lg ag-normal-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors bg-white'
const labelCls = 'ag-medium-sm text-foreground block mb-1.5'
const sectionHeadingCls = 'ag-semi-bold-lg text-foreground mb-5 pb-3 border-b border-border'

function SectionLabel({ number, title }) {
  return (
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
      <span className="w-7 h-7 rounded-full btn-gradient text-white ag-medium-sm flex items-center justify-center flex-shrink-0">{number}</span>
      <p className="ag-semi-bold-lg text-foreground">{title}</p>
    </div>
  )
}

function CheckboxGroup({ options, selected, onChange }) {
  const toggle = (id) => onChange(
    selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]
  )
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const id = typeof opt === 'string' ? opt : opt.id
        const label = typeof opt === 'string' ? opt : opt.label
        const active = selected.includes(id)
        return (
          <button
            key={id}
            type="button"
            onClick={() => toggle(id)}
            className={`px-4 py-2 rounded-full border ag-normal-sm transition-colors ${
              active ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/50'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function RadioGroup({ options, selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const active = selected === opt
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-full border ag-normal-sm transition-colors ${
              active ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/50'
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

const empty = {
  name: '', email: '', phone: '',
  state: '', city: '',
  siteType: '', propertyType: '',
  monthlyBill: '', consumption: '', capacity: '',
  goals: [],
  installMode: '', hasSolar: '', space: '',
  budget: '',
  notes: '',
}

export default function TryItYourself() {
  const [form, setForm] = useState(empty)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const setDirect = (key) => (val) => setForm((f) => ({ ...f, [key]: val }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendFeasibilityEmail(form)
      setSubmitted(true)
    } catch {
      setError('Failed to send. Please try again or email us directly at service@aigon.in')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Try it Yourself – Aigon Mechatronics</title>
        <meta name="description" content="Tell us your energy requirements and know the ideal composition of your desired power plant." />
      </Helmet>

      <Navbar />

      <main>
        <PageHero
          label="Try it Yourself"
          title="Know the feasibility"
          subtitle="Tell us your energy requirements by filling up the following form and know the ideal composition of your desired power plant."
        />

        <section className="bg-white py-20 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 lg:px-10" data-aos="fade-up">

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <img src={CircleCheck} alt="" aria-hidden="true" className="w-14 h-14 mb-5" />
                <h3 className="ag-h3 text-foreground mb-3">Request Submitted!</h3>
                <p className="ag-normal-base text-muted-foreground max-w-sm">
                  Thank you! Our team will analyse your requirements and get back to you with the ideal energy system composition.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2.5 btn-gradient text-white ag-medium-sm rounded-full"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>

                {/* 1 — Your Details */}
                <div>
                  <SectionLabel number="1" title="Your Details" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelCls}>Full Name <span className="text-primary">*</span></label>
                      <input id="name" name="name" type="text" required placeholder="Enter your name" value={form.name} onChange={set('name')} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>Phone Number <span className="text-primary">*</span></label>
                      <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')} className={inputCls} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className={labelCls}>Email Address <span className="text-primary">*</span></label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={set('email')} className={inputCls} />
                    </div>
                  </div>
                </div>

                {/* 2 — Site Information */}
                <div>
                  <SectionLabel number="2" title="Site Information" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label htmlFor="state" className={labelCls}>State</label>
                      <input id="state" name="state" type="text" placeholder="e.g. Kerala" value={form.state} onChange={set('state')} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="city" className={labelCls}>City / District</label>
                      <input id="city" name="city" type="text" placeholder="e.g. Ernakulam" value={form.city} onChange={set('city')} className={inputCls} />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className={labelCls}>Site Type</label>
                    <RadioGroup options={siteTypes} selected={form.siteType} onChange={setDirect('siteType')} />
                  </div>
                  <div>
                    <label className={labelCls}>Property / Facility Type</label>
                    <RadioGroup options={propertyTypes} selected={form.propertyType} onChange={setDirect('propertyType')} />
                  </div>
                </div>

                {/* 3 — Energy Requirements */}
                <div>
                  <SectionLabel number="3" title="Energy Requirements" />
                  <div className="mb-5">
                    <label className={labelCls}>Monthly Electricity Bill</label>
                    <RadioGroup options={billRanges} selected={form.monthlyBill} onChange={setDirect('monthlyBill')} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label htmlFor="consumption" className={labelCls}>Monthly Consumption (kWh) <span className="ag-normal-sm text-muted-foreground">optional</span></label>
                      <input id="consumption" name="consumption" type="number" min="0" placeholder="e.g. 2000" value={form.consumption} onChange={set('consumption')} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="capacity" className={labelCls}>Required Power Capacity (kW) <span className="ag-normal-sm text-muted-foreground">optional</span></label>
                      <input id="capacity" name="capacity" type="number" min="0" placeholder="e.g. 5" value={form.capacity} onChange={set('capacity')} className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Power Goals <span className="ag-normal-sm text-muted-foreground">(select all that apply)</span></label>
                    <CheckboxGroup options={powerGoals} selected={form.goals} onChange={setDirect('goals')} />
                  </div>
                </div>

                {/* 4 — System Preference */}
                <div>
                  <SectionLabel number="4" title="System Preference" />
                  <div className="mb-5">
                    <label className={labelCls}>Preferred Installation Mode</label>
                    <RadioGroup options={installModes} selected={form.installMode} onChange={setDirect('installMode')} />
                  </div>
                  <div className="mb-5">
                    <label className={labelCls}>Do you have an existing solar installation?</label>
                    <RadioGroup options={['Yes', 'No', 'Planned']} selected={form.hasSolar} onChange={setDirect('hasSolar')} />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="space" className={labelCls}>Available Rooftop / Ground Space (sq. ft.) <span className="ag-normal-sm text-muted-foreground">optional</span></label>
                    <input id="space" name="space" type="number" min="0" placeholder="e.g. 1000" value={form.space} onChange={set('space')} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Approximate Budget</label>
                    <RadioGroup options={budgetRanges} selected={form.budget} onChange={setDirect('budget')} />
                  </div>
                </div>

                {/* 5 — Additional Notes */}
                <div>
                  <SectionLabel number="5" title="Additional Requirements" />
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Any specific requirements, questions, or context about your site…"
                    value={form.notes}
                    onChange={set('notes')}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {error && <p className="ag-normal-sm text-red-500">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-8 py-3 btn-gradient text-white ag-semi-bold rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Submit for Feasibility Review'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  )
}
