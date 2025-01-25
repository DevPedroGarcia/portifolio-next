"use client"

import Link from "next/link";

export default function Menu() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/experiencia">Experiência</Link>
          </li>
          <li>
            <Link href="/trabalho">Trabalho</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
          <li>
            <a href="" className="resume-button">
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
