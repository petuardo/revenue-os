"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-300`}
      aria-label="Navegación principal"
    >
      <div
        className={`navbar-pill flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1114]/90 border-[#1E2530]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white relative"
            style={{
              background: "linear-gradient(135deg, #0084C8 0%, #005A8E 100%)",
              boxShadow: "0 0 0 2px rgba(0,132,200,0.3)",
            }}
            aria-label="Revenue OS logo"
          >
            Rei
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold text-[#F0F2F5] tracking-tight">
              Revenue OS
            </span>
            <span className="text-[10px] text-[#7A8594] tracking-widest uppercase">
              Sistema Comercial
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-7">
          {["Sistema", "Proceso", "Casos"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-400 text-[#7A8594] hover:text-[#F0F2F5] transition-colors duration-200 tracking-wide"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="btn-primary text-[13px] px-4 py-2 hidden sm:inline-flex items-center"
          aria-label="Agendar llamada"
        >
          Agendar llamada
        </a>
      </div>
    </nav>
  );
}
