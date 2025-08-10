
"use client";
import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between mx-auto px-4">
        <span className="font-bold text-lg">João Pedro Freitas</span>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button
            onClick={() => scrollTo("projects")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contato
          </button>
        </nav>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/JoaoPedroFreitas9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-freitas9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
