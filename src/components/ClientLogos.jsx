import iitLogo   from '../assets/IIT Png.png'
import dstLogo   from '../assets/DST Png.png'
import dpiitLogo from '../assets/DPIIT Png.png'
import ksmLogo   from '../assets/SM Png.png'

const partners = [
  {
    id: 'iit',
    logo: iitLogo,
    alt: 'IIT Palakkad Technology iHub Foundation',
    desc: 'IIT Palakkad Technology I-Hub Foundation, IIT Palakkad, Palakkad, Kerala – 678623',
  },
  {
    id: 'dst',
    logo: dstLogo,
    alt: 'Department of Science and Technology',
    desc: 'Department of Science and Technology, Govt of India, New Delhi-110 016.',
  },
  {
    id: 'dpiit',
    logo: dpiitLogo,
    alt: 'DPIIT – Department for Promotion of Industry and Internal Trade',
    desc: 'Department for Promotion of Industry and Internal Trade, Ministry of Commerce, Government of India',
  },
  {
    id: 'ksm',
    logo: ksmLogo,
    alt: 'Kerala Startup Mission',
    desc: 'Kerala Startup Mission, Dept of IT, Govt of Kerala',
  },
]

const track = [...partners, ...partners]

export default function ClientLogos() {
  return (
    <section className="py-12 overflow-hidden" aria-label="Our partners and clients" data-aos="fade-up">
      <div className="marquee-track flex gap-4 w-max">
        {track.map((p, i) => (
          <article
            key={`${p.id}-${i}`}
            className="bg-white rounded-2xl p-6 border border-border shadow-sm w-72 shrink-0"
          >
            <div className="mb-4 h-12 flex items-center">
              <img
                src={p.logo}
                alt={p.alt}
                className="h-10 w-auto max-w-[140px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="ag-normal-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
