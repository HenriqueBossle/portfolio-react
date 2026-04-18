import { useParams } from "react-router-dom";
import projects from "../data/projects";
import "./Show.css";
import NavbarShow from "../components/NavbarShow";
import Footer from "../components/Footer";
import { useEffect } from "react";


function Show(){
    const { id } = useParams();

    const project = projects.find(p => p.id === Number(id));

    if(!project){
        return <h1 className="not-found">Projeto não encontrado</h1>
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <NavbarShow />
        <div className="show-wrapper">
            <div className="show">
                <header className="show__header">
                    <h1 className="show__title">{project.title}</h1>
                </header>

                <div className="show__image-container">
                    <img className="show__image" src={project.image} alt={project.title} />
                </div>

                <div className="show__content">
                    <p className="show__description">
                        {project.fullDescription}
                    </p>

                    <div className="show__techs">
                        <h3 className="show__techs-title">Tecnologias Utilizadas</h3>
                        <ul className="show__techs-list">
                            {project.techs.map((tech, index) => (
                                <li className="show__techs-item" key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="show__links">
                        <a className="show__btn show__btn--github" href={project.github} target="_blank" rel="noreferrer">
                            Repositório no GitHub
                        </a>

                        {project.deploy && (  
                            <a className="show__btn show__btn--deploy" href={project.deploy} target="_blank" rel="noreferrer">
                                Deploy
                            </a>
                        ) }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
         </>
    )
}

export default Show;