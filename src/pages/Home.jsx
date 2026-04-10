import Card from "../components/Card"
import Navbar from "../components/Navbar"
import projects from "../data/projects"
import "./Home.css"

function Home(){
    return(
        <>
        <Navbar />
            <header className="header">
                <img className="header__photo" src="../assets/img/me.jpg" alt="Henrique Bossle"/>
                <div className="header__info">
                    <h1 className="header__name">Henrique Bossle</h1>
                    <h2 className="header__role">Desenvolvedor Full-Stack</h2>
                    <h3 className="header__slogan">Criando soluções digitais com design e resultado.</h3>
                </div>
                <div className="header__tech">
                    <h3 className="header__tech-title">Tecnologias</h3>
                    <div className="header__tech-list">
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="HTML"/>
                            <p>HTML</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="CSS"/>
                            <p>CSS</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="Tailwind"/>
                            <p>Tailwind</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="HTML"/>
                            <p>PHP</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="CSS"/>
                            <p>Laravel</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="Tailwind"/>
                            <p>JavaScript</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="Tailwind"/>
                            <p>React JS</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="Tailwind"/>
                            <p>Java</p>
                        </div>
                        <div className="header__tech-item">
                            <img src="../assets/img/me.jpg" alt="Tailwind"/>
                            <p>Docker</p>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">
                <h2 className="main__title">Conheça meus principais projetos</h2>
                <Card index={0} projects={projects} />
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
                <Card index={5}/>
            </main>
        </>
    )
}

export default Home