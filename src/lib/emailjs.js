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
    from_name:  data.name,
    from_email: data.email,
    subject:    data.subject,
    message:    data.message,
  })
}

export function sendFeasibilityEmail(data) {
  const goals = Array.isArray(data.goals) ? data.goals.join(', ') : '—'
  return emailjs.send(EJS_SERVICE_ID, EJS_FEASIBILITY_TID, {
    from_name:     data.name,
    from_email:    data.email,
    phone:         data.phone,
    state:         data.state         || '—',
    city:          data.city          || '—',
    site_type:     data.siteType      || '—',
    property_type: data.propertyType  || '—',
    monthly_bill:  data.monthlyBill   || '—',
    consumption:   data.consumption   || '—',
    capacity:      data.capacity      || '—',
    goals,
    install_mode:  data.installMode   || '—',
    has_solar:     data.hasSolar      || '—',
    space:         data.space         || '—',
    budget:        data.budget        || '—',
    notes:         data.notes         || '—',
  })
}
