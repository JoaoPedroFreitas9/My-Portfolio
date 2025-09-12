export interface Project {
  title: string;
  techStack: string;
  description: string;
  imageUrl: string; // URL da imagem do projeto
  liveUrl?: string; // Link para do deploy
  githubUrl: string; // Link para o repositório
  type: "web" | "mobile";
}

export const projects: Project[] = [
  {
    title: "Meu Portfólio v2",
    techStack: "Next.js + shadcn/ui + Framer Motion",
    description:
      "Versão moderna e interativa do meu site pessoal para exibir meus trabalhos e habilidades.",
    imageUrl: "/portifolio.png",
    liveUrl: "#",
    githubUrl: "https://github.com/user/portfolio",
    type: "web",
  },
  {
    title: "ClínicPlus: Gestão Inteligente para Clínicas e Consultórios",
    techStack: "React + Node.js + PostgreSQL",
    description:
      "O ClínicPlus é uma plataforma web robusta e intuitiva, desenvolvida para modernizar e otimizar a gestão de clínicas, consultórios e centros médicos.",
    imageUrl: "/clinicplus.png",
    liveUrl: "https://clinicplus.vercel.app",
    githubUrl: "https://github.com/JoaoPedroFreitas9/doutor-agenda",
    type: "web",
  },
  {
    title: "freitasplanejados-web",
    techStack: "HTML5 + CSS3 + JavaScript ",
    description:
      "Calculadora web para geração de orçamentos de móveis planejados, desenvolvida para a Marcenaria Freitas",
    imageUrl: "/ProjetoMarcenaria.png",
    liveUrl: "https://freitasplanejados-web.vercel.app/",
    githubUrl: "https://github.com/JoaoPedroFreitas9/freitasplanejados-web",
    type: "web",
  },
  {
    title: "Terra Manager",
    techStack: "React Native + Expo + NestJS",
    description:
      "Aplicativo móvel para agricultores gerenciarem suas plantações, insumos e colheitas.",
    imageUrl: "/terramobile.jpg",
    githubUrl: "https://github.com/JoaoPedroFreitas9/Terra-Mobile",
    type: "mobile",
  },

  {
    title: "FlixMania",
    techStack: "React + React Router Dom + Axios + React Toastify",
    description:
      "FlixMania é uma aplicação web desenvolvida em React que funciona como um catálogo de filmes interativo",
    imageUrl: "/FlixMania.png",
    liveUrl: "https://flixmania.netlify.app/",
    githubUrl: "https://github.com/JoaoPedroFreitas9/FlixManiaProjeto",
    type: "web",
  },
  {
    title: "Site de Previsão do Tempo",
    techStack: "HTML5 + CSS3 + JavaScript + API OpenWeather",
    description:
      "Uma aplicação web simples e com design limpo para consultar a previsão do tempo atual de qualquer cidade do mundo. O projeto utiliza a API da OpenWeatherMap para buscar dados em tempo real e os apresenta de forma clara e intuitiva para o usuário",
    imageUrl: "/Sitedeclima.png",
    liveUrl: "https://pixeldotempo.vercel.app/",
    githubUrl: "https://github.com/JoaoPedroFreitas9/site-previsao-do-tempo",
    type: "web",
  },
];
