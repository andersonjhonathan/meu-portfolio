
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Act Digital • Bradesco",
    description: "Atuei no desenvolvimento de soluções mobile e web de alta performance para o Bradesco, garantindo segurança, escalabilidade e uma experiência do usuário moderna. Participei de projetos estratégicos, aplicando metodologias ágeis e boas práticas de engenharia de software.",
    tools: ["Java", "Kotlin", "Spring Boot", "React Native", "AWS", "UI/UX", "Figma"],
    image: "/bradesco.webp",
  },
  {
    id: 2,
    title: "Unimed • Aplicativo Mobile",
    description: "Desenvolvimento do aplicativo oficial da Unimed para Android e iOS, com foco em usabilidade, acessibilidade e integração de serviços médicos digitais. Entreguei interfaces modernas e fluidas, garantindo uma experiência de uso prática e segura para milhares de usuários.",
    tools: ["React Native", "Figma", "UI/UX", "Firebase", "NextJS", "Angular", ".NET C#"],
    image: "/unimed.png",
  },
  {
    id: 3,
    title: "Pop Vita • Aplicativo Mobile",
    description: "Criação de um app de saúde e bem-estar com design intuitivo e experiência centrada no usuário. O projeto envolveu definição de identidade visual, prototipação de telas, interfaces e implementação de recursos interativos, promovendo engajamento e acessibilidade.",
    tools: ["Figma", "Illustrator", "Photoshop", "UI/UX", "NextJS", "Angular", ".NET C#"],
    image: "/popvita.png",
  },
  {
    id: 4,
    title: "PaGol • Plataforma de Milhas Aéreas",
    description: "Desenvolvimento de aplicativo voltado para gerenciamento de pontos e milhas aéreas, oferecendo ao usuário praticidade no acompanhamento de saldo, resgates e benefícios. Atuei na criação da interface mobile com foco em clareza, responsividade e experiência fluida.",
    tools: ["React Native", "Figma", "UI/UX", "Photoshop", "APIs REST"],
    image: "/pagol.png",
  },
  {
    id: 5,
    title: "iFood • Interface de Aplicativo",
    description: "Trabalhei em propostas de interface para o aplicativo iFood, com ênfase em design limpo, navegação simplificada e experiência do usuário fluida. O projeto incluiu a criação de telas funcionais, componentes reutilizáveis e a aplicação de boas práticas de UI/UX para garantir consistência visual e usabilidade.",
    tools: ["Figma", "UI/UX", "Design System", "Firebase", "NextJS", "Angular", ".NET C#"],
    image: "/ifood.jpg",
  },
  {
    id: 6,
    title: "Omo Lavanderia • Aplicativo Mobile",
    description: "Participação no design de interface e experiência de usuário para o app Omo Lavanderia, trazendo modernidade e praticidade na jornada digital. O projeto teve como foco telas funcionais, interfaces performáticas, identidade visual consistente e clareza na comunicação.",
    tools: ["Figma", "Illustrator", "Photoshop", "UI/UX", "NextJS", "Angular", ".NET C#"],
    image: "/omo.png",
  },
]


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-2xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm md:text-base text-justify">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        className="bg-white/10 border border-primary text-primary font-medium px-3 py-1 rounded-full"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
