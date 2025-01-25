"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typewriter } from "react-simple-typewriter";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function BemVindo() {
  return (
    <main>
      <section className="hero">
        <p>Olá, meu nome é</p>
        <h1 className="nome">
          <span className="typewriter">
            <Typewriter
              words={["Pedro Garcia"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <h2 className="titulo">
          <span className="typewriter">
            <Typewriter
              words={["Sou Desenvolvedor Web"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={68}
              deleteSpeed={55}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="description">
          Sou um desenvolvedor de software, e gosto de criar novas aplicações.
          Atualmente, estou focado em criar aplicações que me divirtam e que eu
          também possa melhorar meu portfólio.
        </p>
        <a href="https://github.com/DevPedroGarcia" target="_blank" rel="noopener noreferrer" >
         <GitHubIcon className="github" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-garcia-b4618b326/" target="_blank" rel="noopener noreferrer" >
          <LinkedInIcon className="linkedin" />
        </a>
        <a href="https://www.instagram.com/pedrogarciatdr/" target="_blank" rel="noopener noreferrer" >
          <InstagramIcon className="instagram" />
        </a>
      </section>
    </main>
  );
}
