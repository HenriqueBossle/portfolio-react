import "./Navbar.css"

function Navbar({ scrollToSection, techRef, aboutRef, projectsRef }) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li
          className="navbar__item navbar__item--active"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          Home
        </li>


        <li
          className="navbar__item"
          onClick={() => scrollToSection(aboutRef)}
        >
          Sobre mim
        </li>

        <li
          className="navbar__item"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projetos
        </li>
      </ul>
    </nav>
  )
}

export default Navbar