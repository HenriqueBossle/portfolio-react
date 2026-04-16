// src/data/projects.js — fonte única de dados

import characters from "../assets/img/characterdata.png"
import clienteObra from "../assets/img/clienteobra.png"

const projects = [
    {
        id: 1,
        title: "Characters Database",
        description: "Aplicação web de gerenciamento de personagens, feita com Laravel e React JS.",
        image: characters,
        fullDescription: "CRUD completo de personagens por API feita em Laravel e consumida com React. API hospeada no Render, React hospeado na Vercel, banco de dados remoto no Neon DB e imagens salvas na Cloudinary. O sistema é responsivo e também conta com autenticação de usuários",
        techs: ["Laravel", "React"],
        github: "https://github.com/HenriqueBossle/react-characters-front-end",
        deploy: "https://react-characters-front-end.vercel.app/"
    },
    {
        id: 2,
        title: "Cliente Obra",
        description: "Sistema de gerenciamente de obras de construção civil feito com Laravel",
        image: clienteObra,
        fullDescription: "Sistema de gestão e organização de clientes de obras de construção civil. O software feito em Laravel conta com CRUD completo, autenticação de usuarios, geração de PDF de todos os regsitros ou de um registro só e pesquisa por filtro.",
        techs: ["Laravel"],
        github: "https://github.com/seu-user/projeto2",
        deploy: "https://projeto2.vercel.app"

    },
    {
        id: 3,
        title: "Projeto gadgsdhs2",
        description: "Descrição curta do projeto 2",
        image: "../assets/img/project2.jpg",
        fullDescription: "Descrição completa do projeto 2...",
        techs: ["React", "Tailwind"],
        github: "https://github.com/seu-user/projeto2",
        deploy: "https://projeto2.vercel.app"
    },
    {
        id: 4,
        title: "Projeto gadgsdhs2",
        description: "Descrição curta do projeto 2",
        image: "../assets/img/project2.jpg",
        fullDescription: "Descrição completa do projeto 2...",
        techs: ["React", "Tailwind"],
        github: "https://github.com/seu-user/projeto2",
        deploy: "https://projeto2.vercel.app"
    },
    {
        id: 5,
        title: "Projeto gadgsdhs2",
        description: "Descrição curta do projeto 2",
        image: "../assets/img/project2.jpg",
        fullDescription: "Descrição completa do projeto 2...",
        techs: ["React", "Tailwind"],
        github: "https://github.com/seu-user/projeto2",
        deploy: "https://projeto2.vercel.app"
    },
    {
        id: 6,
        title: "Projeto gadgsdhs2",
        description: "Descrição curta do projeto 2",
        image: "../assets/img/project2.jpg",
        fullDescription: "Descrição completa do projeto 2...",
        techs: ["React", "Tailwind"],
        github: "https://github.com/seu-user/projeto2",
        deploy: "https://projeto2.vercel.app"
    },
]

export default projects