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
      { threshold: 0 }
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
              <a className="btn btn--outline" href="../Curriculo_Henrique_Bossle_FullStack.pdf" target="_blank">
                Meu Curriculo 
              </a>
            </div>
          </div>
        </div>

        <div ref={techRef} className="tech-bar">
          <h3 className="tech-bar__title">Tecnologias</h3>
          <div className="tech-bar__list">
            {[
              "PHP", "Laravel", "React", "MySQL"
            ].map((tech, index) => (
              <div key={index} className="tech-bar__item" style={{ "--badge-index": index }}>
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
            <div className="about-card__column">
              <p className="p-text">Me chamo Henrique Gonçalves Bossle, sou estudante de Análise e Desenvolvimento de Sistemas e, atualmente, estou no 5º semestre do curso.</p>
              <p className="p-text">Tenho como principais tecnologias PHP e Laravel para desenvolvimento de APIs, regras de negócio, autenticação, CRUDs e aplicações seguindo padrões como MVC. No frontend, utilizo principalmente React, JavaScript, HTML, CSS, Bootstrap e Tailwind CSS para criar interfaces dinâmicas e integradas às APIs.</p>
              <p className="p-text">Atualmente, estou me aprofundando no desenvolvimento Full Stack com PHP, Laravel e React, buscando aprimorar minhas habilidades na construção de sistemas completos, seguros e bem estruturados.</p>
            </div>
            <div className="about-card__column">
              <p className="p-text">Sou apaixonado por tecnologia e programação e tenho como principal objetivo atuar como desenvolvedor Full Stack, criando aplicações web completas, desde o desenvolvimento do backend até a construção de interfaces modernas e responsivas.</p>
              <p className="p-text">Também possuo conhecimentos em bancos de dados, principalmente MySQL, além de experiência com APIs REST, Git, Docker, Postman, deploy e ferramentas como Render e Neon DB.</p>
              <p className="p-text">Este site foi desenvolvido em React e funciona como meu portfólio, onde apresento alguns dos principais projetos que desenvolvi durante minha jornada de aprendizado e evolução como desenvolvedor.</p>
            </div>
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