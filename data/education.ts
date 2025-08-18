
export interface EducationItem {
  institution: string; // Nome da instituição 
  course: string; // Nome do curso ou formação
  period: string; // Período 
  description?: string; // Uma breve descrição do que eu aprendi
}

export const education: EducationItem[] = [
  {
    institution: "Instituto Federal do norte de Minas Gerais",
    course: "Bacharelado em Sistemas de Informação",
    period: "2022 - Cursando",
    description:
      "Curso focado em desenvolvimento de software, banco de dados e redes.",
  },
  {
    institution: "Udemy",
    course: "Formação Next.js do zero ao Avançado na Prática",
    period: "2024 - 2025",
    description:
      "Curso completo sobre Next.js, cobrindo desde os fundamentos até técnicas avançadas de desenvolvimento.",
  },
  {
    institution: "AWS Academy",
    course: "AWS Academy Cloud Foundations",
    period: "2024 - 2025",
    description:
      "Curso introdutório sobre os fundamentos da computação em nuvem e serviços da AWS.",
  },
];
