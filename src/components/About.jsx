function About() {
  return (
    <section className="section" id="about">
      <div className="site-shell about-grid">
        <div>
          <p className="eyebrow">Professional summary</p>
          <h2 className="section-heading">Thoughtful frontend engineering for complex products.</h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m an analytical, results-driven Frontend Developer with 7 years of experience designing, developing, and scaling web applications and enterprise software. I specialize in React, Next.js, and Svelte, with Tailwind CSS, Material UI, and Bootstrap.</p>
          <p>I bridge frontend interfaces with backend data using Python, FastAPI, Flask, and REST APIs. My work includes ERP and HRMS platforms, reusable component libraries, headless CMS integrations, and WordPress experiences.</p>
          <div className="about-facts">
            <div className="fact"><strong>7</strong><span>Years of experience</span></div>
            <div className="fact"><strong>4</strong><span>Featured projects & platforms</span></div>
            <div className="fact"><strong>Mumbai</strong><span>Based in India</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About