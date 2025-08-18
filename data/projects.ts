export interface Project {
  title: string;
  techStack: string;
  description: string;
  imageUrl: string; // URL da imagem do projeto
  liveUrl?: string; // Link para o deploy
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
    title: "Terra Manager",
    techStack: "React Native + Expo + NestJS",
    description:
      "Aplicativo móvel para agricultores gerenciarem suas plantações, insumos e colheitas.",
    imageUrl: "/terramobile.jpg",
    githubUrl: "https://github.com/JoaoPedroFreitas9/Terra-Mobile",
    type: "mobile",
  },
  {
    title: "Sistema de Pizzaria",
    techStack: "Next.js + Postgres + Prisma",
    description: "Sistema de atendiemnto para pizzaria",
    imageUrl: "",
    githubUrl: "",
    type: "web",
  },
];
