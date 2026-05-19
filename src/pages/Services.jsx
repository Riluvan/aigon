import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ClientLogos from '../components/ClientLogos'
import PageCTA from '../components/PageCTA'
import PageFooter from '../components/PageFooter'
import FanIcon from '../assets/Fan.svg'
import PowerIcon from '../assets/power.svg'
import HandCoins from '../assets/HandCoins.svg'
import PuzzleIcon from '../assets/Puzzle.svg'
import SunIcon from '../assets/Sun.svg'
import AntennaIcon from '../assets/Antenna.svg'
import CogIcon from '../assets/Cog.svg'
import ZapIcon from '../assets/Zap.svg'
import LightbulbIcon from '../assets/Lightbulb.svg'
import TelescopeIcon from '../assets/Telescope.svg'
import PieChartIcon from '../assets/PieChart.svg'
import WalletIcon from '../assets/Wallet.svg'
import HandshakeIcon from '../assets/Handshake.svg'
import GavelIcon from '../assets/Gavel.svg'
import BookUserIcon from '../assets/BookUser.svg'
import LeafIcon from '../assets/Leaf.svg'
import CircuitBoardIcon from '../assets/CircuitBoard.svg'
import s1Img from '../assets/service-feasibility.webp'
import s2Img from '../assets/service-integrated.webp'
import s3Img from '../assets/service-collaborations.webp'
import s4Img from '../assets/service-ppa-mode.webp'
import s5Img from '../assets/service-re-consultancy.webp'

function BulletIcon() {
  return (
    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
      <svg className="w-3 h-3" fill="none" stroke="#0083D4" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

const services = [
  {
    tag: 'SERVICE • 1',
    title: 'Feasibility Study',
    desc: 'Site-specific wind & solar resource assessment using meteorological data and terrain analysis.',
    bullets: [
      { text: 'Wind speed & direction profiling', icon: FanIcon },
      { text: 'Energy yield estimation',          icon: ZapIcon },
      { text: 'ROI & payback period report',      icon: HandCoins },
      { text: 'System sizing recommendation',     icon: PuzzleIcon },
    ],
    img: s1Img,
    imgAlt: 'Site engineer conducting wind energy feasibility study',
    reverse: false,
  },
  {
    tag: 'SERVICE • 2',
    title: 'Integrated Solutions',
    desc: 'Redefining energy systems through smart integration of wind, solar, and beyond.',
    bullets: [
      { text: 'End-to-End Wind Turbine Deployment',          icon: FanIcon },
      { text: 'Smart Hybridisation of Solar Installations', icon: SunIcon },
      { text: 'Erection & Commissioning Services',          icon: AntennaIcon },
      { text: 'Energy System Retrofitting & Optimization',  icon: CogIcon },
      { text: 'Custom Hybrid Power Solutions',              icon: ZapIcon },
    ],
    img: s2Img,
    imgAlt: 'Wind-solar hybrid integrated energy installation',
    reverse: true,
  },
  {
    tag: 'SERVICE • 3',
    title: 'Collaborations',
    desc: 'Partner with us to develop, optimize, and deploy advanced renewable energy solutions.',
    bullets: [
      { text: 'Co-Creation of Innovative Energy Solutions',      icon: LightbulbIcon },
      { text: 'Joint R&D Initiatives',                           icon: TelescopeIcon },
      { text: 'System Optimization & Performance Enhancement',   icon: CogIcon },
      { text: 'Data Monitoring & Intelligent Insights',          icon: PieChartIcon },
      { text: 'Technology Integration & Knowledge Exchange',     icon: PuzzleIcon },
    ],
    img: s3Img,
    imgAlt: 'Team collaboration and R&D for renewable energy solutions',
    reverse: false,
  },
  {
    tag: 'SERVICE • 4',
    title: 'PPA Mode',
    desc: 'Power Purchase Agreement — zero upfront investment. Aigon owns and operates the plant.',
    bullets: [
      { text: 'Solar plants',                           icon: SunIcon },
      { text: 'Small wind turbine plants',              icon: FanIcon },
      { text: 'Client pays per unit – no capital risk', icon: WalletIcon },
      { text: 'O&M handled by Aigon',                  icon: HandshakeIcon },
    ],
    img: s4Img,
    imgAlt: 'Wind farm under PPA model — Aigon owns and operates the plant',
    reverse: true,
  },
  {
    tag: 'SERVICE • 5',
    title: 'RE Consultancy',
    desc: 'Expert advisory for organisations transitioning to renewable energy.',
    bullets: [
      { text: 'Policy & regulatory guidance',          icon: GavelIcon },
      { text: 'MNRE subsidy & net metering advisory',  icon: BookUserIcon },
      { text: 'ESG & green certification support',     icon: LeafIcon },
      { text: 'Technology selection & system design',  icon: CircuitBoardIcon },
    ],
    img: s5Img,
    imgAlt: 'Renewable energy consultancy and advisory session',
    reverse: false,
  },
]

function ServiceRow({ service }) {
  const imgEl = (
    <div
      className="rounded-2xl overflow-hidden h-64 md:h-[22rem] bg-gray-100 flex-shrink-0"
      data-aos={service.reverse ? 'fade-left' : 'fade-right'}
    >
      <img
        src={service.img}
        alt={service.imgAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )

  const contentEl = (
    <div data-aos={service.reverse ? 'fade-right' : 'fade-left'} data-aos-delay="100">
      <p className="ag-medium-sm text-primary mb-2">{service.tag}</p>
      <h2 className="ag-h2 text-foreground mb-3">{service.title}</h2>
      <p className="ag-normal-base text-muted-foreground mb-5">{service.desc}</p>
      <ul className="space-y-3 list-none p-0 m-0 mb-6">
        {service.bullets.map((b) => {
          const text = typeof b === 'string' ? b : b.text
          const icon = typeof b === 'string' ? null : b.icon
          return (
            <li key={text} className="flex items-start gap-3">
              {icon
                ? <img src={icon} alt="" aria-hidden="true" className="mt-0.5 flex-shrink-0 w-5 h-5" />
                : <BulletIcon />}
              <span className="ag-normal-base text-foreground">{text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-14 border-b border-border last:border-0">
      {service.reverse ? (
        <>
          <div className="order-1 md:order-2">{imgEl}</div>
          <div className="order-2 md:order-1">{contentEl}</div>
        </>
      ) : (
        <>
          {imgEl}
          {contentEl}
        </>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services – Aigon Mechatronics</title>
        <meta name="description" content="End-to-end clean energy solutions — from analysis to operation. Feasibility studies, integrated solutions, collaborations, PPA mode, and RE consultancy." />
      </Helmet>

      <Navbar />

      <main>
        <PageHero
          label="Services"
          title="What We Do"
          subtitle="End-to-end clean energy solutions — from analysis to operation"
        />

        <section className="bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {services.map((s) => (
              <ServiceRow key={s.title} service={s} />
            ))}
          </div>
        </section>

        <ClientLogos />
        <PageCTA />
      </main>

      <PageFooter />
    </>
  )
}
