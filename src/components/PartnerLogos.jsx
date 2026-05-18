import iitLogo  from '../assets/IIT Png.png'
import dstLogo  from '../assets/DST Png.png'
import dpiitLogo from '../assets/DPIIT Png.png'
import ksmLogo  from '../assets/SM Png.png'

const partners = [
  {
    logo: iitLogo,
    alt: 'IIT Palakkad Technology iHub Foundation',
    desc: 'IIT Palakkad Technology I-Hub Foundation, IIT Palakkad, Palakkad, Kerala – 678623',
  },
  {
    logo: dstLogo,
    alt: 'Department of Science and Technology',
    desc: 'Department of Science and Technology, Govt of India, New Delhi-110 016.',
  },
  {
    logo: dpiitLogo,
    alt: 'DPIIT – Department for Promotion of Industry and Internal Trade',
    desc: 'Department for Promotion of Industry and Internal Trade, Ministry of Commerce, Government of India',
  },
  {
    logo: ksmLogo,
    alt: 'Kerala Startup Mission',
    desc: 'Kerala Startup Mission, Dept of IT, Govt of Kerala',
  },
]

export default function PartnerLogos() {
  return (
    <section className="py-12 bg-white" aria-label="Our partners and supporters">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((p) => (
            <article
              key={p.alt}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col gap-4"
              data-aos="fade-up"
            >
              <div className="h-12 flex items-center">
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
      </div>
    </section>
  )
}
