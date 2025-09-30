import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Entre em contato</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão. Vamos nos conectar!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:andersonjhonathan@gmail.com"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anderson-jhonathan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Linkedin className="h-6 w-6" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/_datech_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Instagram className="h-6 w-6" />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Comece uma parceria!
        </Button>
      </div>
    </section>
  )
}
