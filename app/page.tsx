"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Header } from "@/components/ui/Header";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Github,
  Link as LinkIcon,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { education } from "@/data/education";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceID = "service_r4cdjkc";
    const templateID = "template_8mg12yx";
    const publicKey = "lTgjve_mEwEthZwDj";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        toast.success(
          "Mensagem enviada! Obrigado por entrar em contato, retornarei em breve."
        );
        (e.target as HTMLFormElement).reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    );
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <Header />
      <main className="container max-w-5xl mx-auto p-6 space-y-28 mt-20">
        {/* HERO */}
        <motion.section
          {...sectionAnimation}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-5xl font-bold">
              João Pedro Freitas
            </h1>
            <Badge>Frontend Developer</Badge>
            <p className="text-muted-foreground text-lg">
              Desenvolvedor Front-end focado na criação de interfaces eficientes
              e escaláveis com React, Next.js e TypeScript. Busco aplicar meu
              conhecimento em projetos desafiadores para construir soluções
              robustas, com foco em código limpo e na melhoria da experiência do
              usuário.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Vamos Conversar <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/currículo - JoãoPedroFreitas - Front-End.pdf"
                  download="Curriculo_Joao_Pedro_Freitas-Front-end.pdf"
                >
                  Baixar CV
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="w-74 h-74 border-4 border-primary/10">
                <AvatarImage
                  src="avatar.jpg"
                  alt="Minha foto"
                  className="object-cover"
                />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJETOS  */}
        <motion.section {...sectionAnimation} id="projects">
          <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                          <Image
                            src={project.imageUrl}
                            alt={`Imagem do projeto ${project.title}`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.techStack}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank">
                              <LinkIcon className="w-4 h-4 mr-2" /> Ver Online
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.section>

        {/* SOBRE MIM */}
        <motion.section {...sectionAnimation} id="about">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-muted-foreground text-lg">
              <p>
                Oi! Sou o João Pedro. Desde 2022, venho explorando o universo da programação com o objetivo de transformar boas ideias em soluções web funcionais e bem pensadas. Foi a curiosidade que me trouxe até aqui, e é ela que segue impulsionando minha evolução como desenvolvedor.
              </p>
              <p>
                Desde então, tenho me dedicado a aprofundar meus conhecimentos
                em tecnologias como React, Next.js e todo o ecossistema
                JavaScript/TypeScript. Gosto de enfrentar desafios, aprender
                continuamente e colaborar em projetos que tenham um impacto
                positivo.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold">Principais Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript (ES6+)</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Html</Badge>
                <Badge variant="secondary">Css</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Git & GitHub</Badge>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FORMAÇÃO E CURSOS */}
        <motion.section {...sectionAnimation} id="education">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Formação e Cursos
          </h2>
          <Card className="p-6">
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="my-6" />}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{item.course}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {item.institution}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground text-left sm:text-right">
                      {item.period}
                    </p>
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-3">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* CONTATO */}
        <motion.section {...sectionAnimation} id="contact">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Vamos Conversar?
          </h2>
          <div className="max-w-md mx-auto">
            <p className="text-center text-muted-foreground mb-6">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para me enviar uma mensagem.
            </p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Seu nome" name="from_name" required />
              <Input
                placeholder="Seu e-mail"
                type="email"
                name="from_email"
                required
              />
              <Textarea placeholder="Sua mensagem" name="message" required />
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </motion.section>
      </main>
    </>
  );
}
