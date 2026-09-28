const skills = [
  ['React.js', 'Frontend'], ['Next.js', 'Frontend'], ['Svelte', 'Frontend'],
  ['JavaScript (ES6+)', 'Frontend'], ['HTML5 & CSS3', 'Frontend'], ['Python', 'Backend'],
  ['FastAPI & Flask', 'Backend'], ['PHP', 'Backend'], ['RESTful APIs', 'Backend'],
  ['Tailwind CSS', 'UI'], ['Material UI (MUI)', 'UI'], ['Bootstrap', 'UI'],
  ['WordPress & WooCommerce', 'CMS'], ['Strapi & Ghost CMS', 'CMS'], ['HubSpot', 'CMS'],
  ['Git', 'Tools'], ['Visual Studio', 'Tools'], ['Postman', 'Tools'],
  ['VWO A/B Testing', 'Tools'], ['Adobe Photoshop', 'Tools'],
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="site-shell skills-layout">
        <div>
          <p className="eyebrow">What I work with</p>
          <h2 className="section-heading">A broad toolkit, grounded in frontend.</h2>
          <p className="section-intro">From modern JavaScript frameworks and UI systems to Python APIs, CMS platforms, and testing tools.</p>
        </div>
        <div className="skill-list">
          {skills.map(([name, category]) => (
            <div className="skill-item" key={name}>{name}<span>{category}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills