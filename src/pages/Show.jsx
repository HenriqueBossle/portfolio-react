import { useParams } from "react-router-dom";
import projects from "../data/projects";
import "./Show.css";

function Show(){
    const { id } = useParams();

    const project = projects.find(p => p.id === Number(id));

    if(!project){
        return <h1>Projeto não encontrado</h1>
    }

    return(
        <div className="show">
            <h1 className="show__title">{project.title}</h1>

            <img className="show__image" src={project.image} />

            <p className="show__description">
                {project.fullDescription}
            </p>

            <div className="show__techs">
                <h3 className="show__techs-title">Tecnologias</h3>
                <ul className="show__techs-list">
                {project.techs.map((tech, index) => (
                    <li className="show__techs-item" key={index}>{tech}</li>
                ))}
                </ul>
            </div>

            <div className="show__links">
                <a className="show__btn show__btn--github" href={project.github}>
                GitHub
                </a>

                <a className="show__btn show__btn--deploy" href={project.deploy}>
                Ver Projeto
                </a>
            </div>
        </div>
    )
}

export default Show;