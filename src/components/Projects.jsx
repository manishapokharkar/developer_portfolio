const projects = [
  {
    name: 'HRMS Intelligent Automation Microservice',
    type: 'AI-assisted resume parsing for an HRMS applicant tracking dashboard.',
    detail: 'Built a FastAPI service with NLP extraction for candidate contact details, skills, and experience, reaching 92% extraction accuracy. Structured JSON endpoints reduced manual HR data entry by 70%.',
    image: '',
    previewTitle: 'Candidate workspace',
    previewStats: ['128', '24', '92%'],
    tags: ['Python', 'FastAPI', 'SpaCy NLP', 'PostgreSQL', 'Docker', 'REST APIs'],
  },
  {
    name: 'Enterprise ERP & HRMS Ecosystem',
    type: 'Frontend portals for enterprise services and workforce operations.',
    detail: 'Developed secure Meizo ERP portals for vendor management, gym, and canteen services, with role-based access, analytical charts, and real-time state management.',
    image: '',
    previewTitle: 'People overview',
    previewStats: ['246', '18', '96%'],
    tags: ['React.js', 'Next.js', 'Material UI', 'Tailwind CSS', 'Axios', 'Context API'],
  },
]

function ProjectArtwork({ project, index }) {
  if (project.image) {
    return (
      <div className={`project-art project-art-${index + 1}`}>
        <img className="project-image" src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-art project-art-${index + 1}`} aria-label={`Sample screenshot placeholder for ${project.name}`}>
      <div className="mock-browser">
        <div className="mock-browser-bar"><span><i /><i /><i /></span><span className="mock-address">workspace.meizoerp.com</span></div>
        <div className="mock-dashboard">
          <aside className="mock-sidebar">
            <strong><span className="mock-logo">M</span> meizo</strong>
            <span className="mock-nav-active">Overview</span>
            <span>People</span>
            <span>Requests</span>
            <span>Reports</span>
          </aside>
          <div className="mock-main">
            <div className="mock-heading"><span><small>WORKSPACE</small><strong>{project.previewTitle}</strong></span><i /></div>
            <div className="mock-stats">
              {project.previewStats.map((stat, statIndex) => (
                <div className="mock-stat" key={stat}><span>{['Total', 'In review', 'Completed'][statIndex]}</span><strong>{stat}</strong><i /></div>
              ))}
            </div>
            <div className="mock-report">
              <div className="mock-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="mock-rows" aria-hidden="true"><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </div>
      <span className="mock-caption">Sample preview · replace with project screenshot</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="site-shell">
        <div className="projects-top">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading">Enterprise products, built for people.</h2>
          </div>
          <p className="section-intro">Frontend platforms and automation work from my ERP, HRMS, and AI integration experience.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <ProjectArtwork project={project} index={index} />
              <div className="project-meta">
                <div><h3>{project.name}</h3><p>{project.type}</p><p className="project-detail">{project.detail}</p></div>
                <a className="project-arrow" href="#contact" aria-label={`Ask about ${project.name}`}>↗</a>
              </div>
              <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}<span className="tag">0{index + 1}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects