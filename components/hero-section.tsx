"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Engine } from "tsparticles-engine"
import { useCallback } from "react"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('/meu-portfolio/fundo2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay leve para clarear a imagem */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Gradiente animado leve */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-gradient"></div>

      {/* Partículas sutis */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 2, random: true },
            move: { enable: true, speed: 1, direction: "none", outMode: "out" },
          },
        }}
        className="absolute inset-0"
      />

      {/* Conteúdo central */}
      <div className="relative text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Anderson Souza
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-white/90 drop-shadow-md">
          Designer Criativo & Web Designer
        </p>
        <Button
          size="lg"
          onClick={scrollToProjects}
          className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto"
          aria-label="Ver portfólio"
        >
          Ver Portfólio
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* CSS do gradiente animado */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientAnimation 20s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </section>
  )
}
