const features = [
  {
    title: "Script de Incorporação",
    description: "Código JavaScript único por fluxo"
  },
  {
    title: "Implementação Simples",
    description: "Copy & paste no HTML do site"
  },
  {
    title: "Responsividade Automática",
    description: "Adaptação para mobile e desktop"
  },
  {
    title: "Suporte Técnico",
    description: "Documentação completa e assistência"
  }
]

const steps = [
  {
    step: "1",
    title: "Crie seu fluxo",
    description: "Use o construtor visual para criar seu formulário de captura"
  },
  {
    step: "2",
    title: "Copie o código",
    description: "Gere o script JavaScript personalizado para seu fluxo"
  },
  {
    step: "3",
    title: "Cole no seu site",
    description: "Adicione o código no HTML da página onde deseja o formulário"
  },
  {
    step: "4",
    title: "Teste e publique",
    description: "Teste o funcionamento e publique sua página"
  }
]

export function ImplementationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Implementação{" "}
            <span className="text-primary">Técnica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Facilidade de integração em apenas 4 passos simples
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
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

          {/* Right Content - Implementation Steps */}
          <div className="space-y-8">
            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Code Example */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Exemplo de Código
              </h3>

              <div className="bg-secondary/20 border border-border rounded p-4">
                <pre className="text-xs text-foreground overflow-x-auto">
                  {`<!-- Leadnator Script -->
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://app.leadnator.com/embed/flow-123.js';
    script.async = true;
    document.head.appendChild(script);
  })();
</script>

<!-- Container do formulário -->
<div id="leadnator-form-container"></div>`}
                </pre>
              </div>
            </div>

            {/* Responsive Preview */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Preview Responsivo
              </h3>

              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">Desktop</span>
                </div>
                <div className="bg-secondary/20 border border-border rounded p-4 h-32 flex items-center justify-center">
                  <div className="w-full max-w-xs bg-primary/20 rounded-lg p-4 text-center">
                    <div className="text-xs text-foreground">Formulário Desktop</div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-sm text-muted-foreground">Mobile</span>
                </div>
                <div className="bg-secondary/20 border border-border rounded p-4 h-32 flex items-center justify-center">
                  <div className="w-32 bg-primary/20 rounded-lg p-4 text-center">
                    <div className="text-xs text-foreground">Mobile</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Suporte Técnico
              </h3>

              <div className="space-y-3 text-center">
                <div className="text-sm text-muted-foreground">
                  Documentação completa disponível
                </div>
                <div className="text-sm text-muted-foreground">
                  Suporte por email e chat
                </div>
                <div className="text-sm text-muted-foreground">
                  Tempo de resposta: até 2 horas
                </div>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                  Acessar Documentação
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
