import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { sendContactEmail } from '../lib/emailjs'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import PartnerLogos from '../components/PartnerLogos'
import PageCTA from '../components/PageCTA'
import PageFooter from '../components/PageFooter'
import iitLogo from '../assets/iitplogo 1.png'
import MapPin from '../assets/MapPin.svg'
import PhoneCall from '../assets/PhoneCall.svg'
import Mail from '../assets/Mail.svg'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendContactEmail(form)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Failed to send. Please try again or email us directly at service@aigon.in')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact – Aigon Mechatronics</title>
        <meta name="description" content="Get in touch with Aigon Mechatronics. Reach us at Cochin, Kerala or send us a message online." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <PageHero label="Connect" title="Reach Us">
          <div className="mt-3">
            <p className="ag-normal-base text-muted-foreground">Aigon Mechatronics Pvt. Ltd.</p>
            <p className="ag-normal-base text-muted-foreground">
              Cochin, Kerala&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="https://www.aigon.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                www.aigon.in
              </a>
            </p>
          </div>
        </PageHero>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-14" data-aos="zoom-in">
          <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden bg-gray-200">
            <iframe
              title="Aigon Mechatronics location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5479!2d76.3099!3d10.0261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5c56d6b9b7%3A0x0!2zMTDCsDAxJzMzLjkiTiA3NsKwMTgnMzUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Get in Touch + Form */}
        <section className="bg-white py-14 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left: info */}
            <div data-aos="fade-right">
              <h2 className="ag-h2 text-foreground mb-4">Get in Touch with Us</h2>
              <p className="ag-normal-base text-muted-foreground mb-2">
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
              </p>
              <p className="ag-normal-base text-muted-foreground mb-8">
                Our team is here to assist you and ensure you have the best experience possible.
              </p>

              <ul className="space-y-4 list-none p-0 m-0 mb-8">
                <li className="flex items-start gap-3">
                  <img src={MapPin} alt="" aria-hidden="true" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="ag-semi-bold text-foreground">Aigon Mechatronics Pvt Ltd, Cochin, Kerala – 682308</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src={PhoneCall} alt="" aria-hidden="true" className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+918301860501" className="ag-semi-bold text-foreground hover:text-primary transition-colors">
                    +91 8301 860 501
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <img src={Mail} alt="" aria-hidden="true" className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:service@aigon.in" className="ag-semi-bold text-foreground hover:text-primary transition-colors">
                    service@aigon.in
                  </a>
                </li>
              </ul>

              <p className="ag-normal-sm text-muted-foreground mb-3">Powered by:</p>
              <p className="ag-semi-bold text-foreground mt-2">IPTIF – IIT Palakkad Technology i-Hub Foundation</p>
              <p className="ag-normal-sm text-muted-foreground">IIT Palakkad, Palakkad, Kerala-678 623</p>
            </div>

            {/* Right: form */}
            <div data-aos="fade-left" data-aos-delay="100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="ag-h3 text-foreground mb-2">Message Sent!</h3>
                  <p className="ag-normal-base text-muted-foreground">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="ag-medium-sm text-foreground block mb-1.5">Full Name</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full pl-9 pr-4 py-2.5 border border-border rounded-lg ag-normal-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="ag-medium-sm text-foreground block mb-1.5">Email</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full pl-9 pr-4 py-2.5 border border-border rounded-lg ag-normal-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="ag-medium-sm text-foreground block mb-1.5">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Enter your topic"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg ag-normal-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="ag-medium-sm text-foreground block mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Enter your queries..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg ag-normal-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {error && <p className="ag-normal-sm text-red-500">{error}</p>}

                  <button
                    type="submit"
                    disabled={sending}
                    className="px-7 py-3 btn-gradient text-white ag-medium-sm rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <PartnerLogos />
        <PageCTA />
      </main>

      <PageFooter />
    </>
  )
}
