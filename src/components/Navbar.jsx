import "./Navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item navbar__item--active">Home</li>
                <li className="navbar__item">Tecnologias</li>
                <li className="navbar__item">Projetos</li>
            </ul>
        </nav>
    )
}

export default Navbar