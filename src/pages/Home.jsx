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
  const starsRef = useRef(null)

  useEffect(() => {
    const canvas = starsRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let width = 0
    let height = 0
    let animationFrame
    let stars = []
    let lastFrame = 0

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      stars = Array.from({ length: Math.max(42, Math.round((width * height) / 9000)) }, () => {
        const speedX = (Math.random() - 0.5) * 0.12
        const speedY = (Math.random() - 0.5) * 0.12
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.8 + 0.45,
          speedX,
          speedY,
          targetSpeedX: speedX,
          targetSpeedY: speedY,
          directionChangeIn: 500 + Math.random() * 2200,
          phase: Math.random() * Math.PI * 2,
        }
      })
      draw(0, true)
    }

    const draw = (time, staticFrame = false) => {
      context.clearRect(0, 0, width, height)
      const elapsed = staticFrame ? 0 : Math.min(time - lastFrame, 40)
      lastFrame = time

      if (!staticFrame) {
        stars.forEach((star) => {
          star.directionChangeIn -= elapsed
          if (star.directionChangeIn <= 0) {
            star.targetSpeedX = (Math.random() - 0.5) * 0.12
            star.targetSpeedY = (Math.random() - 0.5) * 0.12
            star.directionChangeIn = 700 + Math.random() * 2400
          }
          star.speedX += (star.targetSpeedX - star.speedX) * Math.min(1, elapsed * 0.0007)
          star.speedY += (star.targetSpeedY - star.speedY) * Math.min(1, elapsed * 0.0007)
          star.x = (star.x + star.speedX * elapsed + width) % width
          star.y = (star.y + star.speedY * elapsed + height) % height
        })
      }

      stars.forEach((star) => {
        const twinkle = staticFrame ? 0.35 : 0.25 + Math.sin(time * 0.0007 + star.phase) * 0.12
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(220, 240, 255, ${twinkle})`
        context.shadowColor = "rgba(93, 190, 255, 0.55)"
        context.shadowBlur = star.radius * 3
        context.fill()
      })
      context.shadowBlur = 0

      if (!staticFrame && !reduceMotion.matches) animationFrame = window.requestAnimationFrame(draw)
    }

    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrame)
      if (reduceMotion.matches) draw(0, true)
      else animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    startAnimation()
    window.addEventListener("resize", resize)
    reduceMotion.addEventListener("change", startAnimation)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
      reduceMotion.removeEventListener("change", startAnimation)
    }
  }, [])

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
        <canvas ref={starsRef} className="header__stars" aria-hidden="true" />
        <div className="header__main-info">
          <img className="header__photo" src={me} alt="Henrique Bossle" />

          <div className="header__text">
            <h1 className="header__name">Henrique Bossle</h1>
            <h2 className="header__role">Desenvolvedor Full-Stack</h2>
            <p className="header__slogan">
              APIs em Laravel e interfaces em React, publicadas em produção.
            </p>

            <div className="header__buttons">
              <a className="btn btn--primary" href="https://www.linkedin.com/in/henrique-bossle-219b622b9/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn--secondary" href="https://github.com/HenriqueBossle" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn--outline" href="../Henrique-Bossle-Desenvolvedor-Full-Stack_new_estagio.pdf" target="_blank">
                Meu Curriculo 
              </a>
            </div>
          </div>
        </div>

        <div ref={techRef} className="tech-bar">
          <h3 className="tech-bar__title">Tecnologias</h3>
          <div className="tech-bar__list">
            {[
              "PHP", "Laravel", "React", "API Rest", "MySQL", "PostgreSQL"
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
              <p className="p-text">Também possuo conhecimentos em bancos de dados, principalmente MySQL e PostgreSQL, além de experiência com APIs REST, Git, Docker, Postman, deploy, NeuronAI (para desenvolvimento de IA com PHP) e ferramentas como Render e Neon DB.</p>
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