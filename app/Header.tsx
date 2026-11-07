"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header id="arriba" className={`site-header${compact ? " is-compact" : ""}`}>
    <a href="#inicio" className="brand" aria-label="JYMatrix, inicio"><Image src="/branding/logo-transparent.png" alt="JYMatrix — Soluciones Informáticas & Consultoría" width={1160} height={355} priority sizes="(max-width: 600px) 190px, 250px" /></a>
    <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#modalidades">Cómo contratar</a><a href="#nosotros">Experiencia</a><a className="nav-cta" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a></nav>
  </header>;
}
