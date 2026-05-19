import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ClientLogos from '../components/ClientLogos'
import PageCTA from '../components/PageCTA'
import PageFooter from '../components/PageFooter'
import CircleCheck from '../assets/CircleCheck.svg'
import CircleMinus from '../assets/CircleMinus.svg'
import windTurbineImg from '../assets/Wind Turbine.webp'

const products = [
  {
    tag: 'PRODUCT • 1',
    subtitle: 'Small Wind Turbine – 1kW',
    model: 'AGN-1K',
    img: windTurbineImg,
    imgAlt: 'AGN-1K small wind turbine installation',
    specs: [
      { label: 'Rated Power',              value: '1000W'        },
      { label: 'Start-up Wind Speed',      value: '1.8 m/s'      },
      { label: 'Design Rated Wind Speed',  value: '9 m/s'        },
      { label: 'Blade length',             value: '1.5 m'        },
      { label: 'Out Put',                  value: '12/24/48/96V' },
      { label: 'Mode',                     value: 'Hybrid Ready' },
      { label: 'Type',                     value: 'Off-Grid'     },
      { label: 'Turbine Weight',           value: '80 kg'        },
      { label: 'Noise level',              value: '+5 dB'        },
    ],
    reverse: false,
  },
  {
    tag: 'PRODUCT • 2',
    subtitle: 'Compact Wind Turbine – 3kW',
    model: 'AGN-3K',
    img: windTurbineImg,
    imgAlt: 'AGN-3K compact wind turbine in field',
    specs: [
      { label: 'Rated Power',              value: '3000W'            },
      { label: 'Start-up Wind Speed',      value: '2 m/s'            },
      { label: 'Design Rated Wind Speed',  value: '9 m/s'            },
      { label: 'Blade length',             value: '2.5 m'            },
      { label: 'Out Put',                  value: '48/96V/On-Grid'   },
      { label: 'Mode',                     value: 'Hybrid Ready'     },
      { label: 'Type',                     value: 'Off-Grid/ON-Grid' },
      { label: 'Turbine Weight',           value: '140 kg'           },
      { label: 'Noise level',              value: '+10 dB'           },
    ],
    reverse: true,
  },
  {
    tag: 'PRODUCT • 3',
    subtitle: 'Advanced Wind Turbine – 5kW',
    model: 'AGN-5K',
    img: windTurbineImg,
    imgAlt: 'AGN-5K advanced wind turbine row',
    specs: [
      { label: 'Rated Power',              value: '5000W'            },
      { label: 'Start-up Wind Speed',      value: '2 m/s'            },
      { label: 'Design Rated Wind Speed',  value: '9 m/s'            },
      { label: 'Blade length',             value: '3 m'              },
      { label: 'Out Put',                  value: '48/96V/On-Grid'   },
      { label: 'Mode',                     value: 'Hybrid Ready'     },
      { label: 'Type',                     value: 'Off-Grid/ON-Grid' },
      { label: 'Turbine Weight',           value: '200 kg'           },
      { label: 'Noise level',              value: '+10 dB'           },
    ],
    reverse: false,
  },
]

const onGridFeatures = [
  'Connected to state electricity grid (KSEB / DISCOM)',
  'Exports surplus power – earn via net metering',
  'No battery required – lower initial cost',
  'Ideal for institutions, industries & corporates',
  'Peak Time Generation & Energy Export benefits from DISCOM',
  'Automatic grid sync & safety cutout',
]

const offGridFeatures = [
  'Fully independent of grid – ideal for remote sites',
  'Battery bank stores energy for night use',
  'Wind + Solar hybrid maximises uptime',
  'Replaces diesel generators – saves fuel costs',
  'Telecom towers, defence, coastal fisheries',
  'Intelligent MPPT charge controller included',
]

function Check() {
  return <img src={CircleCheck} alt="" aria-hidden="true" className="mt-0.5 flex-shrink-0 w-5 h-5" />
}

function Minus() {
  return <img src={CircleMinus} alt="" aria-hidden="true" className="mt-0.5 flex-shrink-0 w-5 h-5" />
}

function ProductRow({ product }) {
  const imgEl = (
    <div className="rounded-2xl overflow-hidden h-72 md:h-[33rem] bg-gray-100" data-aos={product.reverse ? 'fade-left' : 'fade-right'}>
      <img
        src={product.img}
        alt={product.imgAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )

  const contentEl = (
    <div data-aos={product.reverse ? 'fade-right' : 'fade-left'} data-aos-delay="100">
      <p className="ag-medium-sm text-primary mb-2">{product.tag}</p>
      <p className="ag-normal-base text-muted-foreground mb-1">{product.subtitle}</p>
      <h2 className="ag-h2 text-foreground mb-5">{product.model}</h2>
      <p className="ag-semi-bold text-foreground mb-3">Technical Specifications:</p>
      <div className="rounded-xl overflow-hidden border border-border">
        {product.specs.map((s, i) => (
          <div
            key={s.label}
            className={`flex ${i % 2 === 0 ? 'bg-muted/50' : 'bg-white'}`}
          >
            <span className="ag-medium-sm text-foreground w-1/2 px-3 md:px-4 py-2.5 border-r border-border">{s.label}</span>
            <span className="ag-normal-sm text-muted-foreground w-1/2 px-3 md:px-4 py-2.5">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-14 border-b border-border last:border-0">
      {product.reverse ? (
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

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products – Aigon Mechatronics</title>
        <meta name="description" content="Automated micro hybrid wind energy systems engineered for low-wind, grid-interactive, and off-grid environments." />
      </Helmet>

      <Navbar />

      <main>
        <PageHero
          label="Products"
          title="What We Make"
          subtitle="Automated micro hybrid wind energy systems engineered for low-wind, grid-interactive, and off-grid environments."
        />

        {/* Product listings */}
        <section className="bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {products.map((p) => (
              <ProductRow key={p.model} product={p} />
            ))}
          </div>
        </section>

        {/* On-Grid vs Off-Grid */}
        <section className="bg-muted/40 py-14 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <p className="ag-semi-bold text-primary mb-3">INSTALLATION MODES</p>
              <h2 className="ag-h2 text-foreground mb-2">On-Grid vs Off-Grid</h2>
              <p className="ag-normal-base text-muted-foreground">Choose your system architecture</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* On-Grid */}
              <div className="bg-white rounded-2xl p-8 border border-border" data-aos="fade-right">
                <h3 className="ag-h3 text-foreground mb-6">On-Grid</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {onGridFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check />
                      <span className="ag-normal-base text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Off-Grid */}
              <div className="bg-white rounded-2xl p-8 border border-border" data-aos="fade-left" data-aos-delay="100">
                <h3 className="ag-h3 text-foreground mb-6">Off-Grid</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {offGridFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Minus />
                      <span className="ag-normal-base text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
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
