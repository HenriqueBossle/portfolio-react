// src/data/projects.js — fonte única de dados

import characters from "../assets/img/characterdata.png"
import clienteObra from "../assets/img/clienteobra.png"
import fictionGrid from "../assets/img/fictiongrid.png"
import portifolio from "../assets/img/potfolio1.png"
import hqhero from "../assets/img/hq_hero_image.png"
import gerenciador from "../assets/img/gerenciadorobras.png"
import rubycrud from "../assets/img/crudruby.png"
import carouselcharacters from "../assets/img/carouselcharacters.png"
import comicvault from "../assets/img/comicvault.png"
import clienteObra3 from "../assets/img/clienteObra3.png"

const projects = [
    {
        id: 1,
        title: "ClienteObra",
        description: "Terceito sistema para gestão de obras, desta vez com deploy completo.",
        image: clienteObra3,
        fullDescription: "Terceiro sistema que fiz para gestão de clientes de construção civil, consiste em uma aplicação web com back-end em Laravel e front-end em React JS. O software conta com CRUD completo para registro de clientes, autenticação e separação de usuários, geração de pdf de um ou de todos os registros, filtro e pesquisa por obra, envio de email para cadastro e recuperação de conta e edição e exclusão de conta. O deploy foi feito com Render e Vercel e o sistema já está disponível para uso real.",
        techs: ["React", "Laravel", "Dompdf", "Brevo", "Neon DB", "Render"],
        deploy: "https://cliente-obra-api2-frontend.vercel.app/"
    },
    {
        id: 2,
        title: "Comic Vault",
        description: "Sistema para gerenciar minhas HQs de super-herois feito com Ruby On Rails.",
        image: comicvault,
        fullDescription: "Meu segundo sistema web de gestão de HQs, desta vez fiz para aprendizado sobre Ruby On Rails. O software está hospedado no Render e seu banco de dados no Neon DB como de costume e conta com CRUD completo de HQs e franquias, filtro por todos os campos de tabela, ordenação por número de edição e por franquia, autenticação de usuários e upload de imagens salvas no Cloudinary.",
        techs: ["Ruby On Rails", "Neon DB", "Cloudinary", "Render"],
        github: "https://github.com/HenriqueBossle/ruby-on-rails-comic-vault/tree/main",
        deploy: "https://ruby-on-rails-comic-vault.onrender.com/"
    },
    {
        id: 3,
        title: "Carousel de Personagens",
        description: "Página web de carrossel feita com React.",
        image: carouselcharacters,
        fullDescription: "Pequena aplicação feita em React que consiste em um carrossel que exibe diferentes personagens. Foi desenvolvida como uma atividade da faculdade para estudo de props e useState no React. Aproveitei também para consumir uma API que já havia criado para o projeto Characters Database.",
        techs: ["React", "Laravel", "Neon DB", "Cloudinary"],
        github: "https://github.com/HenriqueBossle/react-characters-carousel",
        deploy: "https://react-characters-carousel.vercel.app/"
    },
    {
        id: 4,
        title: "CRUD com Ruby",
        description: "CRUD simples feito para estudar a linguagem Ruby.",
        image: rubycrud,
        fullDescription: "Aplicação simples de CRUD desenvolvida com Ruby puro, utilizando banco de dados hospedado no Neon DB. A visualização é feita via terminal e a aplicação foi containerizada com Docker para aprimorar meus conhecimentos nessas ferramentas.",
        techs: ["Ruby", "Docker", "Neon DB"],
        github: "https://github.com/HenriqueBossle/my-first-ruby-crud/tree/main",
    },
    {
        id: 5,
        title: "Characters Database",
        description: "Aplicação web de gerenciamento de personagens, feita com Laravel e React JS.",
        image: characters,
        fullDescription: "CRUD completo de personagens por API feita em Laravel e consumida com React. API hospedada no Render, React hospeado na Vercel, banco de dados remoto no Neon DB e imagens salvas na Cloudinary. O sistema é responsivo e também conta com autenticação de usuários",
        techs: ["Laravel", "React", "Render", "Neon DB", "Cloudinary"],
        github: "https://github.com/HenriqueBossle/react-characters-front-end",
        deploy: "https://react-characters-front-end.vercel.app/"
    },
    {
        id: 6,
        title: "Cliente Obra",
        description: "Sistema de gerenciamento de obras de construção civil feito com Laravel e estilizado com Tailwind CSS.",
        image: clienteObra,
        fullDescription: "Sistema de gestão e organização de clientes de obras de construção civil. O software feito em Laravel conta com CRUD completo, autenticação de usuarios, geração de PDF de todos os regsitros ou de um registro só e pesquisa por filtro.",
        techs: ["Laravel", "Dompdf","Tailwind CSS", "MySQL"],
        github: "https://github.com/HenriqueBossle/ClienteObra",
       

    },
    {
        id: 7,
        title: "Fiction Grid",
        description: "Outro sistema de gerenciamento de personagens feito somente com Laravel.",
        image: fictionGrid,
        fullDescription: "Aplicação web feita em Laravel de gerenciamento de personagens com CRUD completo, filtro por franquia do personagens, estilização com Tailwind CSS e autenticação de usuários. O banco de dados foi hospedado no Neon DB e o projeto no Render.",
        techs: ["Laravel", "Tailwind CSS", "Neon DB"],
        github: "https://github.com/HenriqueBossle/fiction_grid",
        deploy: "https://fiction-grid-1.onrender.com/"
    },
    {
        id: 8,
        title: "Meu primeiro portfólio",
        description: "Portfólio feito com HTML e Tailwind CSS.",
        image: portifolio,
        fullDescription: "Meu primeiro portfólio foi feito com HTML e estilizado com Tailwind CSS, construído para mostrar alguns dos meus projetos, feitos principalmente com Laravel e PHP.",
        techs: ["HTML", "Tailwind CSS"],
        github: "https://github.com/HenriqueBossle/meu-portifolio-html/tree/main",
        deploy: "https://meu-portifolio-html-kappa.vercel.app/"
    },
    {
        id: 9,
        title: "HQ Hero",
        description: "Aplicação web em Laravel sobre HQs de super-heróis.",
        image: hqhero,
        fullDescription: "Site de gerenciamento de HQs feito com Laravel 12. Possui pesquisa com filtro e relação entre as tabelas categoria e HQ.",
        techs: ["Laravel", "Tailwind"],
        github: "https://github.com/HenriqueBossle/gerenciador-de-comics"
    },
    {
        id: 10,
        title: "Gerenciador de Obras",
        description: "Meu primeiro sistema de gestão de clientes de construção civil.",
        image: gerenciador,
        fullDescription: "Aplicação web de CRUD completo feita com Laravel 11. Possui gerador de PDF, pesquisa com filtro e autenticação com Laravel.",
        techs: ["Laravel", "Dompdf", "Tailwind", "MySQL"],
        github: "https://github.com/HenriqueBossle/sistema-cadastro-obras",
    },
]

export default projects