function Hero() {
  return (
    <section className="hero" id="home">
      <div className="site-shell hero-grid">
        <div>
          <p className="availability">Frontend Developer · Mumbai, India</p>
          <h1>Manisha Papade<span>.</span></h1>
          <p className="hero-copy">
            Frontend Developer with 7 years of experience building high-performance
            web applications, enterprise ERP and HRMS products, and content-driven experiences.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Profile photo">
          <div className="portrait">
            <span aria-hidden="true">MP</span>
            <img src="/profile.jpg" alt="Portrait of Manisha Papade" onError={(event) => { event.currentTarget.style.display = 'none' }} />
          </div>
          <span className="portrait-note">React · Next.js · Python</span>
        </div>
      </div>
      <span className="hero-index" aria-hidden="true">01 / 06</span>
    </section>
  )
}

export default Hero