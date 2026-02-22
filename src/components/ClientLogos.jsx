import iitLogo     from '../assets/iitplogo 1.png'
import dstLogo     from '../assets/dst-logo1 1.png'
import infosysLogo from '../assets/Infosys_logo.svg 1.png'
import indiacsrLogo from '../assets/INDIA-CSR-LOGO 2.png'

const partners = [
  {
    id: 'iit',
    logo: iitLogo,
    alt: 'Indian Institute of Technology Palakkad',
    desc: 'Automated hybrid wind systems for real world energy efficient solutions.',
  },
  {
    id: 'dst',
    logo: dstLogo,
    alt: 'Department of Science & Technology',
    desc: 'Automated hybrid wind systems for real world energy efficient solutions.',
  },
  {
    id: 'infosys',
    logo: infosysLogo,
    alt: 'Infosys',
    desc: 'Automated hybrid wind systems for real world energy efficient solutions.',
  },
  {
    id: 'indiacsr',
    logo: indiacsrLogo,
    alt: 'IndiaCSR — Corporate Sustainability & Responsibility',
    desc: 'Automated hybrid wind systems for real world energy efficient solutions.',
  },
]

/* Duplicate for seamless infinite loop */
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
            <div className="mb-4 h-10 flex items-center">
              <img
                src={p.logo}
                alt={p.alt}
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
