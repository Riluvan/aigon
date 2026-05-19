import emailjs from '@emailjs/browser'

// ─── Replace these three values from your EmailJS dashboard ───────────────────
export const EJS_SERVICE_ID      = 'service_zbatep9'
export const EJS_CONTACT_TID     = 'template_qwtk268'
export const EJS_FEASIBILITY_TID = 'template_4bmnaef'
export const EJS_PUBLIC_KEY      = 'jvUyItmwVw-a5V0BH'
// ─────────────────────────────────────────────────────────────────────────────

emailjs.init(EJS_PUBLIC_KEY)

export function sendContactEmail(data) {
  return emailjs.send(EJS_SERVICE_ID, EJS_CONTACT_TID, {
    name:    data.name,
    email:   data.email,
    subject: data.subject,
    message: data.message,
  })
}

export function sendFeasibilityEmail(data) {
  const goals = Array.isArray(data.goals) ? data.goals.join(', ') : '—'
  return emailjs.send(EJS_SERVICE_ID, EJS_FEASIBILITY_TID, {
    name:               data.name,
    email:              data.email,
    phone:              data.phone             || '—',
    location:           [data.city, data.state].filter(Boolean).join(', ') || '—',
    site_info:          [data.siteType, data.propertyType].filter(Boolean).join(' | ') || '—',
    energy_needs:       [data.monthlyBill && `Bill: ${data.monthlyBill}`, data.consumption && `Consumption: ${data.consumption}`, data.capacity && `Capacity: ${data.capacity}`, goals && `Goals: ${goals}`].filter(Boolean).join(' | ') || '—',
    system_preference:  [data.installMode && `Mode: ${data.installMode}`, data.hasSolar && `Solar: ${data.hasSolar}`, data.space && `Space: ${data.space}`, data.budget && `Budget: ${data.budget}`].filter(Boolean).join(' | ') || '—',
    additional:         data.notes             || '—',
  })
}
