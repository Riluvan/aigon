import { Helmet } from 'react-helmet-async'
import aboutBanner from '../assets/about-hero-banner.webp'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ClientLogos from '../components/ClientLogos'
import PageCTA from '../components/PageCTA'
import PageFooter from '../components/PageFooter'
import School from '../assets/School.svg'
import satelliteDish from '../assets/SatelliteDish.svg'
import TreePalm from '../assets/TreePalm.svg'
import MountainSnow from '../assets/MountainSnow.svg'
import Factory from '../assets/Factory.svg'
import Hospital from '../assets/Hospital.svg'
import CircleCheck from '../assets/CircleCheck.svg'

const applications = [
  {
    label: 'Coastal Business Units & Resorts',
    desc: 'Beach resorts, fish processing units, prawn farms & coastal hotels benefit from consistent coastal winds – reducing grid dependency.',
    icon: <img src={TreePalm} alt="" aria-hidden="true" className="w-8 h-8" />,
  },
  {
    label: 'Hill Station Resorts & Homestays',
    desc: 'High-altitude locations enjoy stronger wind resources, making hybrid systems highly cost effective.',
    icon: <img src={MountainSnow} alt="" aria-hidden="true" className="w-8 h-8" />,
  },
  {
    label: 'Educational Institutions',
    desc: 'Colleges and universities can use it as a live learning tool while achieving energy independence and meet green campus goals.',
    icon: <img src={School} alt="" aria-hidden="true" className="w-8 h-8" />,
  },
  {
    label: 'Industries & Corporate Campuses',
    desc: 'Reduce peak demand charges and demonstrate ESG commitment with on-site renewable generation.',
    icon: <img src={Factory} alt="" aria-hidden="true" className="w-8 h-8" />,
  },
  {
    label: 'Telecom Towers & Defence Outposts',
    desc: 'Remote off-grid installations with reliable 24×7 power, replacing diesel generators and cutting Opex significantly.',
    icon: <img src={satelliteDish} alt="" aria-hidden="true" className="w-8 h-8" />,
  },
  {
    label: 'Hospitals & Healthcare Centres',
    desc: 'Uninterrupted power critical for healthcare — hybrid systems ensure continuity during grid outages.',
    icon: <img src={Hospital} alt="" aria-hidden="true" className="w-8 h-8" />,
  },
]

const benefitsLeft = [
  {
    title: 'Peak Load Stress Reduction',
    desc: 'Aigon systems shave peak demand spikes, protecting your equipment and reducing maximum demand charges on electricity bills.',
  },
  {
    title: 'Significant Electricity Cost Savings',
    desc: 'Save 30–60% on electricity costs depending on location, with payback periods as low as 4–6 years.',
  },
  {
    title: 'Uninterrupted Power Supply',
    desc: 'Hybrid systems with battery backup ensure 24×7 power availability, independent of grid outages or load-shedding.',
  },
  {
    title: 'Zero-Emission Green Energy',
    desc: "Reduce your carbon footprint and contribute to India's net-zero goals — ideal for CSR reporting and ESG compliance.",
  },
]

const benefitsRight = [
  {
    title: 'Low Maintenance & Long Life',
    desc: 'Aigon turbines are engineered for 20+ year lifespans with minimal maintenance – no fuel costs; simplified mechanical design for high reliability',
  },
  {
    title: 'Grid Independence & Energy Security',
    desc: 'Supplement or replace grid power entirely. Off-grid options available for remote locations without stable grid access.',
  },
  {
    title: 'Wind + Solar Hybrid Advantage',
    desc: 'Complementary generation — wind is strongest at night and in monsoon, solar during the day — maximising yearly yield.',
  },
  {
    title: 'Increased Property & Brand Value',
    desc: 'A visible renewable energy installation enhances brand perception and can improve resort ratings and institutional rankings.',
  },
]

function BenefitItem({ title, desc }) {
  return (
    <div className="flex gap-3">
      <img src={CircleCheck} alt="" aria-hidden="true" className="mt-1 flex-shrink-0 w-5 h-5" />
      <div>
        <p className="ag-semi-bold text-foreground mb-1">{title}</p>
        <p className="ag-normal-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About – Aigon Mechatronics</title>
        <meta name="description" content="Kerala-based clean energy startup specialising in decentralised small wind turbines and wind-solar hybrid power systems." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <PageHero
          label="About"
          title="Who We are"
          subtitle="Aigon Mechatronics Pvt. Ltd. is a Kerala-based clean energy startup specialising in decentralised small wind turbines and wind-solar hybrid power systems."
        />

        {/* Banner image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-14" data-aos="zoom-in">
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src={aboutBanner}
              alt="Aerial view of wind turbines — Aigon clean energy"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Clean Energy split */}
        <section className="bg-white py-14 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <h2 className="ag-h2 text-foreground leading-tight">
                Clean Energy for a<br />Sustainable Tomorrow
              </h2>
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <p className="ag-normal-base text-muted-foreground mb-4">
                We design, supply, install, and maintain innovative energy solutions that bring affordable, uninterrupted, green electricity to businesses, resorts, institutions, and coastal communities across India.
              </p>
              <p className="ag-normal-base text-muted-foreground">
                Backed by the Department of Science and Technology (DST), Government of India, and supported by IIT Palakkad Technology IHub Foundation (IPTIF) for technical development, we focus on scalable, high-efficiency solutions for distributed energy applications worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-muted/40 py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <p className="ag-semi-bold text-primary mb-3">APPLICATIONS</p>
              <h2 className="ag-h2 text-foreground mb-4">Where it Works Best</h2>
              <p className="ag-normal-base text-muted-foreground max-w-lg mx-auto">
                Micro wind turbines are most effective in areas with consistent wind patterns, such as coastal regions or open plains.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, i) => (
                <div key={app.label} data-aos="fade-up" data-aos-delay={i * 80} className="flex flex-col items-center text-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center">{app.icon}</span>
                  <p className="ag-semi-bold text-foreground">{app.label}</p>
                  <p className="ag-normal-sm text-muted-foreground">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-14 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <p className="ag-semi-bold text-primary mb-3">BENEFITS</p>
              <h2 className="ag-h2 text-foreground mb-4">Smarter Benefits, Never Before</h2>
              <p className="ag-normal-base text-muted-foreground max-w-xl mx-auto">
                Our innovative green micro wind energy solutions empower communities to harness the power of nature, providing sustainable and efficient energy alternatives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-8" data-aos="fade-right">
                {benefitsLeft.map((b) => <BenefitItem key={b.title} {...b} />)}
              </div>
              <div className="space-y-8" data-aos="fade-left" data-aos-delay="100">
                {benefitsRight.map((b) => <BenefitItem key={b.title} {...b} />)}
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />
        <PageCTA />
      </main>

      <PageFooter />
    </>
  )
}
