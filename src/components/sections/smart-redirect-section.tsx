const features = [
  {
    title: "Configuração Flexível",
    description: "Acionamento imediato, por tempo ou botão flutuante"
  },
  {
    title: "WhatsApp Personalizado",
    description: "Mensagens com campos dinâmicos ({{nome}}, {{telefone}}), formatação (negrito, itálico, sublinhado)"
  },
  {
    title: "Redirecionamento para Links",
    description: "URLs customizáveis com abertura em nova aba"
  },
  {
    title: "Métricas de Sucesso",
    description: "Registro automático de redirecionamentos realizados"
  },
  {
    title: "Notificações Visuais",
    description: "Alertas de redirecionamento com contagem regressiva"
  }
]

export function SmartRedirectSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Redirecionamento{" "}
            <span className="text-primary">Inteligente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema avançado de redirecionamento com exemplos práticos e personalização total
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Example */}
          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Exemplo de Configuração
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    WhatsApp com dados dinâmicos
                  </p>
                </div>

                {/* WhatsApp Example */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">W</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Online</div>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-3 text-sm">
                    <div className="text-muted-foreground mb-2">Mensagem:</div>
                    <div className="text-foreground">
                      Olá <strong>{"{{nome}}"}</strong>! 👋<br />
                      Recebemos seu contato no telefone <strong>{"{{telefone}}"}</strong><br />
                      Em breve nossa equipe entrará em contato!
                    </div>
                  </div>
                </div>

                {/* Configuration Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Acionamento:</span>
                    <span className="text-foreground font-medium">Imediato</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Abertura:</span>
                    <span className="text-foreground font-medium">Nova aba</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Contagem regressiva:</span>
                    <span className="text-foreground font-medium">3 segundos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
