const features = [
  {
    title: "Rastreamento Completo",
    description: "GCLID, FBCLID e parâmetros UTM capturados automaticamente"
  },
  {
    title: "Persistência de Dados",
    description: "Manutenção de parâmetros mesmo com redirecionamentos"
  },
  {
    title: "Importação Offline",
    description: "Conversões importadas para Google Ads e Facebook Ads"
  },
  {
    title: "Atribuição Precisa",
    description: "Cada lead vinculado à campanha de origem"
  },
  {
    title: "Logs de Auditoria",
    description: "Registro completo de eventos de conversão"
  }
]

const metrics = [
  { label: "Visitas", value: "1,234", change: "+12%" },
  { label: "Leads Completos", value: "456", change: "+8%" },
  { label: "Leads Incompletos", value: "78", change: "-3%" },
  { label: "Taxa de Conversão", value: "37%", change: "+5%" }
]

export function TrackingSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Medição e{" "}
            <span className="text-primary">Rastreamento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como a plataforma mede e atribui conversões com precisão total
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

          {/* Right Content - Metrics Dashboard */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Métricas em Tempo Real
              </h3>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className={`text-xs font-medium ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Tracking Parameters */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                Parâmetros Capturados
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">GCLID:</span>
                  <span className="text-foreground font-mono text-xs bg-secondary/20 px-2 py-1 rounded">
                    gclid=abc123...
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">FBCLID:</span>
                  <span className="text-foreground font-mono text-xs bg-secondary/20 px-2 py-1 rounded">
                    fbclid=def456...
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">UTM Source:</span>
                  <span className="text-foreground font-mono text-xs bg-secondary/20 px-2 py-1 rounded">
                    google
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">UTM Campaign:</span>
                  <span className="text-foreground font-mono text-xs bg-secondary/20 px-2 py-1 rounded">
                    black-friday
                  </span>
                </div>
              </div>
            </div>

            {/* Attribution Example */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                Exemplo de Atribuição
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Lead:</span>
                  <span className="text-foreground">João Silva</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Campanha:</span>
                  <span className="text-foreground">Google Ads - Black Friday</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Custo:</span>
                  <span className="text-foreground">R$ 15,50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">ROI:</span>
                  <span className="text-green-500 font-medium">+340%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
