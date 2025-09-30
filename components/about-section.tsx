"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "HTML",
  "CSS",
  "Bootstrap",
  "UI/UX",
  "Responsive Design",
]

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre mim
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sou Engenheiro de Software e Web Designer apaixonado por criar experiências digitais únicas e funcionais.
          Tenho ampla experiência em desenvolvimento web e mobile, com especialização em tecnologias modernas como Angular, React, React Native e C# .NET, entregando soluções escaláveis, de alta qualidade e com design elegante.
          Nos últimos anos, participei de projetos desafiadores em ambientes dinâmicos e colaborativos — incluindo o aplicativo oficial da Unimed para Android e iOS e soluções tecnológicas para o Bradesco na Act Digital. Minha expertise envolve desenvolvimento frontend e backend, integrações com APIs REST, serviços em nuvem (AWS, Firebase) e aplicação de metodologias ágeis (Scrum, Kanban, Lean Agile).
          Com forte foco em UI/UX, design responsivo e otimização de desempenho, meu objetivo é desenvolver soluções centradas no usuário que unam funcionalidade, inovação e impacto visual. Sempre comprometido com a melhoria contínua, busco entregar resultados que superem as expectativas do negócio e dos usuários.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="text-base px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
