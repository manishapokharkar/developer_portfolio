function Footer() {
  return (
    <footer className="footer">
      <div className="site-shell footer-inner">
        <p>© {new Date().getFullYear()} Manisha Papade · Frontend Developer</p>
        <div className="footer-links">
          <a href="#home">Back to top ↑</a>
          <a href="mailto:manishapapade7@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer