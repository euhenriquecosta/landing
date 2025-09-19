import { useNavigation } from '@/hooks/useNavigation'

export function HeroSection() {
  const { handleRegister } = useNavigation()

  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme visitantes em{" "}
                <span className="text-primary">leads qualificados</span>{" "}
                sem código
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plataforma de geração de leads integrada com CRM, redirecionamento inteligente
                e rastreamento avançado. Crie fluxos de captura visualmente em minutos.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRegister}
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/images/botao-principal.png" alt="Começar Agora" className="h-12" />
              </button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <img src="/images/icon-sem-cartao.svg" alt="Sem cartão" className="h-4" />
                <span>Sem cartão de crédito</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+95%</div>
                <div className="text-sm text-muted-foreground">Conversão</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">7 dias</div>
                <div className="text-sm text-muted-foreground">Grátis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5 min</div>
                <div className="text-sm text-muted-foreground">Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">CRM</div>
                <div className="text-sm text-muted-foreground">Integrado</div>
              </div>
            </div>
          </div>

          {/* Right Content - Robot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/images/robo.webp"
                alt="Leadnator Robot"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
