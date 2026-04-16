import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function NavbarShow() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
            <a className="navbar__item" href="/">  <FontAwesomeIcon icon={faArrowLeft} /> Voltar</a>
      </ul>
    </nav>
  )
}

export default NavbarShow