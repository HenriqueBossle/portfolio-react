// src/data/projects.js — fonte única de dados

import characters from "../assets/img/characterdata.png"
import clienteObra from "../assets/img/clienteobra.png"
import fictionGrid from "../assets/img/fictiongrid.png"
import portifolio from "../assets/img/potfolio1.png"
import hqhero from "../assets/img/hq_hero_image.png"

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
        description: "Sistema de gerenciamento de obras de construção civil feito com Laravel e estilizado com Tailwind CSS.",
        image: clienteObra,
        fullDescription: "Sistema de gestão e organização de clientes de obras de construção civil. O software feito em Laravel conta com CRUD completo, autenticação de usuarios, geração de PDF de todos os regsitros ou de um registro só e pesquisa por filtro.",
        techs: ["Laravel", "Tailwind CSS"],
        github: "https://github.com/seu-user/projeto2",
       

    },
    {
        id: 3,
        title: "Fiction Grid",
        description: "Outro sistema de gerenciamento de personagens feito somente com Laravel.",
        image: fictionGrid,
        fullDescription: "Aplicação web de gerenciamento de personagens com CRUD completo feito em Laravel, estilizado com Tailwind CSS e autenticação de usuários",
        techs: ["React", "Tailwind CSS"],
        github: "https://github.com/HenriqueBossle/fiction_grid",
        deploy: "https://fiction-grid-1.onrender.com/"
    },
    {
        id: 4,
        title: "Meu primeiro portfólio",
        description: "Portfólio feito com HTML e Tailwind CSS.",
        image: portifolio,
        fullDescription: "Meu primeiro portfólio foi feito com HTML e estilizado com Tailwind CSS, construído para mostrar alguns dos meus projetos, feitos principalmente com Laravel e PHP.",
        techs: ["HTML", "Tailwind CSS"],
        github: "https://github.com/HenriqueBossle/meu-portifolio-html/tree/main",
        deploy: "https://meu-portifolio-html-kappa.vercel.app/"
    },
    {
        id: 5,
        title: "HQ Hero",
        description: "Aplicação web em Laravel de organização de HQs de super-heróis.",
        image: hqhero,
        fullDescription: "Site de gerenciamento de HQs feito com Laravel 12. Possui pesquisa com filtro e relação entre as tabelas categoria e HQ.",
        techs: ["Laravel", "Tailwind"],
        github: "https://github.com/HenriqueBossle/gerenciador-de-comics"
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