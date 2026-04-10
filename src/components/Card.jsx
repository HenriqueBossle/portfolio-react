import "./Card.css"
import { useEffect, useRef, useState } from "react"
import "../data/projects"
import projects from "../data/projects"

function Card({ index = 0, props }){
        const cardRef = useRef(null)
        const proj = projectData

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        cardRef.current.classList.add("card--visible")
                        observer.disconnect()
                    }
                },
                { threshold: 0.9 }
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
                    <h3 className="card__title">{projects.title}</h3>
                    <p className="card__description">Proj 1</p>
                    <a className="card__link" href="#">Ver mais</a>
                </div>
            </div>
    )
}

export default Card