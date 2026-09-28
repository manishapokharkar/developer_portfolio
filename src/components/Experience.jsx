const roles = [
  { date: '2025 — Present', role: 'Frontend Developer', company: 'Meizo Infotech Pvt Ltd', detail: 'Architected modular ERP, HRMS, vendor management, and service-tracking modules. Built onboarding, attendance, leave, and payroll workflows; created reusable Tailwind and MUI components; integrated Strapi and Ghost CMS. Python log and API-payload tooling accelerated frontend testing by 35%.' },
  { date: '2021 — 2023', role: 'Web Developer', company: 'Technosoft Engineering Pvt Ltd', detail: 'Built tailored WordPress architectures with Advanced Custom Fields. Ran VWO A/B tests to improve conversion funnels, enforced query and form validation, and delivered HubSpot Live Changes integrations.' },
  { date: '2021 — 2022', role: 'Senior WordPress Developer', company: 'Brij Design Studio Pvt. Ltd.', detail: 'Customized and optimized premium websites using Elementor and WP Bakery. Managed server operations and hosting migrations, and implemented technical SEO, ecommerce checkouts, and Google Analytics.' },
  { date: '2015 — 2020', role: 'Web Developer', company: 'Version Next Technologies Pvt. Ltd.', detail: 'Converted PSD designs into responsive, cross-browser Bootstrap layouts. Took part in weekly UX reviews and optimized vector assets, banners, and icons in Photoshop.' },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="site-shell">
        <p className="eyebrow">Where I&apos;ve been</p>
        <h2 className="section-heading">Experience that keeps me learning.</h2>
        <div className="experience-list">
          {roles.map((item) => (
            <article className="experience-row" key={item.date}>
              <span className="experience-date">{item.date}</span>
              <div className="experience-role"><h3>{item.role}</h3><p>{item.detail}</p></div>
              <span className="experience-place">{item.company}</span>
            </article>
          ))}
        </div>
        <div className="education-note">
          <div><span className="experience-date">Education</span><p><strong>Bachelor of Computer Engineering</strong> · JCOE, Pune</p></div>
          <div><span className="experience-date">Prior experience · 2014 — 2015</span><p><strong>Computer Teacher</strong> · St. Joseph&apos;s Convent High School, Bandra</p></div>
        </div>
      </div>
    </section>
  )
}

export default Experience