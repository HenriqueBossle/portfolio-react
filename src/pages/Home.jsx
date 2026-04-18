import Card from "../components/Card"
import Navbar from "../components/Navbar"
import projects from "../data/projects"
import "./Home.css"
import { useEffect, useRef } from "react"
import me from "../assets/img/me.jpeg"
import Footer from "../components/Footer"

function Home() {
  const techRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible")
          }
        });
      },
      { threshold: 0.2 }
    )

    const sections = [aboutRef.current, techRef.current, projectsRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-wrapper dark-theme">
      <Navbar
        scrollToSection={scrollToSection}
        techRef={techRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />

      <header className="header">
        <div className="header__main-info">
          <img className="header__photo" src={me} alt="Henrique Bossle" />

          <div className="header__text">
            <h1 className="header__name">Henrique Bossle</h1>
            <h2 className="header__role">Desenvolvedor Full-Stack</h2>
            <p className="header__slogan">
              Criando soluções digitais com design e resultado.
            </p>

            <div className="header__buttons">
              <a className="btn btn--primary" href="https://www.linkedin.com/in/henrique-bossle-219b622b9/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn--secondary" href="https://github.com/HenriqueBossle" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn--outline" href="../public/Curriculo - Henrique Bossle - Programador - FullStack (1).pdf" target="_blank">
                Meu Curriculo
              </a>
            </div>
          </div>
        </div>

        <div ref={techRef} className="tech-bar">
          <h3 className="tech-bar__title">Tecnologias</h3>
          <div className="tech-bar__list">
            {[
              "HTML", "CSS", "Tailwind", "PHP", "Laravel", "Java Script", "React", "Java", "Ruby", "MySQL"
            ].map((tech, index) => (
              <div key={index} className="tech-bar__item">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="main-content">
        <section ref={aboutRef} className="about-section reveal">
          <h2 className="section-title">Sobre mim</h2>
          <div className="about-card">
<p className="p-text">
  Me chamo Henrique Gonçalves Bossle, sou estudante de Análise e Desenvolvimento de Sistemas e, atualmente, estou no 5º semestre do curso.
          </p>
          <p className="p-text">Gosto muito de estudar e aprender mais sobre o maravilhoso mundo da tecnologia e da programação. Tenho interesse principalmente no desenvolvimento de sites e sistemas web</p>

          <p className="p-text">
            Possuo conhecimentos em HTML, CSS, Bootstrap, Tailwind CSS, PHP,
            Laravel, JavaScript, React, Java, Spring Boot, Kotlin, APIs REST, CRUD, MVC
            e banco de dados como MySQL.
          </p>

          <p className="p-text">
            Também tenho noções de Docker, deploy e uso de ferramentas como
            Postman, Render e Neon DB.
          </p>

          <p className="p-text">
            Atualmente, estou me dedicando à criação de projetos React com consumo de APIs e, recentemente, comecei a estudar Ruby.
          </p>

          <p className="p-text">
            Este site feito em React atua como um portfólio onde coloco meus
            principais projetos.
          </p>
          </div>
        </section>

        <section ref={projectsRef} className="projects-section">
          <h2 className="section-title">Meus Projetos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Card key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home