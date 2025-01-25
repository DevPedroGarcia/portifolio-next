"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importação do hook useRouter correto
import "../globals.css";

const cards = [
  {
    id: 1,
    title: "Sobre Mim",
    content:
      "Olá, meu nome é Pedro Garcia Teodoro. Tenho 19 anos. E atualmente curso Ciências da Computação na Universidade Guarulhos (UNG).",
    image: "/foto de perfil.png", // Coloque sua imagem na pasta public
  },
  {
    id: 2,
    title: "Minha Experiência",
    content:
      "Eu sou a 3 anos sonoplasta na Assembleia de Deus Ministério do Belém - Jd. dos Pimentas e trabalhei durante 8 meses no varejo sem registro, desenvolvendo habilidades de vendas. Hoje em dia eu procuro uma primeira oportunidade na área de Tecnologia da Informação, por isso estudo atualmente React, Next.js e Java",
    image: "/foto de perfil.png", // Exemplo de outra imagem
  },
  {
    id: 3,
    title: "Meus Objetivos",
    content:
      "Como eu disse anteriormente, eu tenho o objetivo de conseguir um emprego na área de programação. Começando por um estagio e ir evoluindo aos poucos como programador. Quero criar uma carreira para que no futuro eu consiga realizar meus sonhos, e sei que o primeiro passo para tudo isso",
    image: "/foto de perfil.png", // Exemplo de outra imagem
  },
];

export default function Sobre() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Chamando o hook useRouter diretamente dentro do componente

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleGoHome = () => {
    router.push("/"); // Navega para a página principal
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="sobre-container">
      <div className="sobre-card">
        <Image
          src={currentCard.image}
          alt={currentCard.title}
          width={150}
          height={150}
          className="foto-perfil"
        />
        <h1>{currentCard.title}</h1>
        <p>{currentCard.content}</p>
        <div className="buttons-container">
          {currentIndex === 0 && (
            <button className="navigation-button" onClick={handleGoHome}>
              Voltar
            </button>
          )}
          {currentIndex > 0 && (
            <button className="navigation-button" onClick={handlePrevious}>
              Anterior
            </button>
          )}
          {currentIndex < cards.length - 1 && (
            <button className="navigation-button" onClick={handleNext}>
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
