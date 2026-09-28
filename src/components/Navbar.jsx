const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="site-shell nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Manisha Papade, home">
          Manisha Papade<span className="brand-mark">.</span>
        </a>
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
          <li><a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar