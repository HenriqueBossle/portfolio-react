import Card from "../components/Card"
import Navbar from "../components/Navbar"
import projects from "../data/projects"
import "./Home.css"
import { useEffect, useRef } from "react"
import me from "../assets/img/me.jpeg"

function Home() {
  const techRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  // Scroll suave
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  // Animação do "Sobre mim"
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("about--visible")
        }
      },
      { threshold: 0.4 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        techRef={techRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />

      <header className="header">
        <img
          className="header__photo"
          src={me}
          alt="Henrique Bossle"
        />

        <div className="header__info">
          <h1 className="header__name">Henrique Bossle</h1>
          <h2 className="header__role">Desenvolvedor Full-Stack</h2>
          <h3 className="header__slogan">
            Criando soluções digitais com design e resultado.
          </h3>

          <div className="header__buttons">
            <a
              className="btn-linkedin"
              href="https://www.linkedin.com/in/henrique-bossle-219b622b9/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="btn-github"
              href="https://github.com/HenriqueBossle"
              target="_blank"
            >
              GitHub
            </a>

            <a className="btn-cv" href="../public/Curriculo - Henrique Bossle - Programador - FullStack (1).pdf">
              Currículo em PDF
            </a>
          </div>
        </div>

        {/* TECNOLOGIAS */}
        <div ref={techRef} className="header__tech">
          <h3 className="header__tech-title">Tecnologias</h3>

          <div className="header__tech-list">
            {[
              "HTML",
              "CSS",
              "Tailwind",
              "PHP",
              "Laravel",
              "JavaScript",
              "React",
              "Java",
              "Docker",
            ].map((tech, index) => (
              <div key={index} className="header__tech-item">
                <img src="../assets/img/me.jpg" alt={tech} />
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="main">
        {/* SOBRE */}
        <h3 className="main__title">Sobre mim</h3>

        <div ref={aboutRef} className="about about--from-left">
          <p className="p-about">
            Sou uma pessoa dedicada e em constante aprendizado, com interesse em
            desenvolvimento de sistemas e tecnologia.
          </p>

          <p className="p-about">
            Possuo conhecimentos em HTML, CSS, Bootstrap, Tailwind CSS, PHP,
            Laravel, JavaScript, React, Java, Spring Boot, APIs REST, CRUD, MVC
            e banco de dados como MySQL.
          </p>

          <p className="p-about">
            Também tenho noções de Docker, deploy e uso de ferramentas como
            Postman, Render e Neon DB.
          </p>

          <p className="p-about">
            Este site feito em React atua como um portfólio onde coloco meus
            principais projetos.
          </p>
        </div>

        {/* PROJETOS */}
        <h2 ref={projectsRef} className="main__title">
          Conheça meus principais projetos
        </h2>

        {projects.map((project, index) => (
          <Card key={project.id} project={project} index={index} />
        ))}
      </main>
    </>
  )
}

export default Home