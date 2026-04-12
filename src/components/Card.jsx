import "./Card.css"
import { useEffect, useRef, useState } from "react"
import "../data/projects"

function Card({ project, index = 0 }){
        const cardRef = useRef(null)
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        cardRef.current.classList.add("card--visible")
                        observer.disconnect()
                    }
                },
               { threshold: window.innerWidth < 768 ? 0.3 : 0.9 }
            )

            if(cardRef.current) observer.observe(cardRef.current)

            return () => observer.disconnect()
        }, [])

        const fromLeft = index % 2 === 1
    
        return(
            <div
                className={`card ${fromLeft ? "card--from-left" : "card--from-right"}`}
                ref={cardRef}>
                <img className="card__image" src="../assets/img/me.jpg" alt="Henrique Bossle" />
                <div className="card__content">
                    <h3 className="card__title">{project.title}</h3>
                    <p className="card__description">Proj 1</p>
                    <a className="card__link" href="../pages/Show.jsx">Ver mais</a>
                </div>
            </div>
    )
}

export default Card