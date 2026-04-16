import "./Card.css"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

function Card({ project, index = 0 }){
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    cardRef.current.classList.add("card--visible")
                    // Mantemos o disconnect para a animação ocorrer apenas uma vez
                    observer.disconnect()
                }
            },
            { threshold: 0.2 } // Dispara quando 20% do card está visível
        )

        if(cardRef.current) observer.observe(cardRef.current)

        return () => observer.disconnect()
    }, [])

    // Lógica para alternar o lado da animação
    const fromLeft = index % 2 === 1

    return(
        <div
            className={`card ${fromLeft ? "card--from-left" : "card--from-right"}`}
            ref={cardRef}>
            <img className="card__image" src={`${project.image}`} alt={project.title} />
            <div className="card__content">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__description">{project.description}</p>
                <Link className="card__link" to={`/${project.id}`} >Ver mais</Link>
            </div>
        </div>
    )
}

export default Card