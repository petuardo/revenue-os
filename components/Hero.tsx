"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Ping-pong video loop via requestAnimationFrame (cross-browser)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let goingForward = true;
    let raf: number;
    const STEP = 1 / 30; // ~30fps step when reversing

    const tick = () => {
      if (!video.paused && !goingForward) {
        video.currentTime = Math.max(0, video.currentTime - STEP);
        if (video.currentTime <= 0.05) {
          goingForward = true;
          video.play().catch(() => {});
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      goingForward = false;
      // browsers that support negative playbackRate
      try {
        video.playbackRate = -1;
        video.play().catch(() => {});
      } catch {
        // fallback: rAF loop handles reverse
      }
    };

    video.addEventListener("ended", handleEnded);
    raf = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Mouse glow in hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGlowPos({ x, y });
    };

    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Poster image fallback */}
        <Image
          src="/hero-poster.png"
          alt="Revenue OS — Infraestructura Comercial"
          fill
          className={`object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
          priority
        />
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/hero-poster.png"
          onLoadedData={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern z-11 opacity-40" />
        {/* Mouse glow */}
        <div
          className="absolute inset-0 z-12 pointer-events-none transition-none"
          style={{
            background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0,132,200,0.08) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28">
        <div className="max-w-[780px]">
          {/* Eyebrow */}
          <p className="eyebrow mb-6 fade-up visible">
            Sistema operativo comercial para inmobiliarias
          </p>

          {/* Headline */}
          <h1
            className="mb-6 leading-[1.05] tracking-tight fade-up visible stagger-1"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            <span className="font-[300] text-[#F0F2F5] block">
              Más leads no es más cierres.
            </span>
            <span className="font-[600] text-[#F0F2F5] block">
              <span className="text-[#0084C8] font-[400]">Infraestructura</span>{" "}
              sí.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#7A8594] text-[16px] font-[300] leading-relaxed max-w-xl mb-10 fade-up visible stagger-2">
            Construimos el sistema de crecimiento que conecta captación, CRM,
            automatización e inteligencia comercial en un solo motor conectado
            al revenue.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 fade-up visible stagger-3">
            <a href="#sistema" className="btn-primary inline-flex items-center gap-2">
              Ver el sistema
            </a>
            <a href="#contacto" className="btn-ghost inline-flex items-center gap-2">
              Diagnóstico gratuito{" "}
              <span className="text-[#0084C8]" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-12 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-[1px] h-12 bg-[#1E2530] overflow-hidden">
          <div className="scroll-line w-full h-full bg-[#0084C8]" />
        </div>
        <span className="text-[10px] text-[#7A8594] tracking-[0.2em] uppercase rotate-90 translate-x-2">
          Scroll
        </span>
      </div>
    </section>
  );
}
