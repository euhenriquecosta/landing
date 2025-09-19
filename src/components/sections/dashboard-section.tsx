const features = [
  {
    title: "Métricas Essenciais",
    description: "Visitas, Leads Completos, Leads Incompletos, Taxa de Conversão"
  },
  {
    title: "Filtros Avançados",
    description: "Por URL destino, fonte de tráfego, fluxo específico, período"
  },
  {
    title: "Comparação Temporal",
    description: "Análise de performance vs período anterior"
  },
  {
    title: "Gráficos Interativos",
    description: "Visualizações claras de tendências e padrões"
  },
  {
    title: "Exportação de Dados",
    description: "Relatórios para análise externa"
  }
]

const metrics = [
  { label: "Visitas", value: "12,456", change: "+15%", trend: "up" },
  { label: "Leads Completos", value: "3,789", change: "+22%", trend: "up" },
  { label: "Leads Incompletos", value: "456", change: "-8%", trend: "down" },
  { label: "Taxa de Conversão", value: "30.4%", change: "+5%", trend: "up" }
]

const filters = [
  "URL Destino",
  "Fonte de Tráfego",
  "Fluxo Específico",
  "Período"
]

export function DashboardSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dashboard{" "}
            <span className="text-primary">Estratégico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recursos de análise e relatórios para otimizar sua estratégia de leads
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

          {/* Right Content - Dashboard Interface */}
          <div className="space-y-8">
            {/* Metrics Overview */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                Métricas em Tempo Real
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {metric.label}
                    </div>
                    <div className={`text-xs font-medium flex items-center justify-center ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`}>
                      <span className="mr-1">
                        {metric.trend === 'up' ? '↗' : '↘'}
                      </span>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Filtros Avançados
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {filters.map((filter, index) => (
                  <div key={index} className="bg-secondary/20 border border-border rounded-lg p-3 text-center">
                    <span className="text-sm text-foreground">{filter}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Example */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Gráfico de Tendências
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Últimos 30 dias</span>
                  <span className="text-foreground font-medium">+15% vs período anterior</span>
                </div>

                {/* Simple Chart Representation */}
                <div className="h-32 bg-secondary/10 rounded-lg p-4 flex items-end justify-between">
                  {[20, 35, 28, 45, 38, 52, 48, 61, 55, 68, 72, 65, 78, 82, 75].map((height, index) => (
                    <div
                      key={index}
                      className="bg-primary rounded-t"
                      style={{ height: `${height}%`, width: '4px' }}
                    ></div>
                  ))}
                </div>

                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 Jan</span>
                  <span>15 Jan</span>
                  <span>30 Jan</span>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Exportação de Dados
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Formato:</span>
                  <select className="bg-secondary/20 border border-border rounded px-3 py-1 text-sm">
                    <option>CSV</option>
                    <option>Excel</option>
                    <option>PDF</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Período:</span>
                  <select className="bg-secondary/20 border border-border rounded px-3 py-1 text-sm">
                    <option>Últimos 7 dias</option>
                    <option>Últimos 30 dias</option>
                    <option>Últimos 90 dias</option>
                  </select>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Exportar Relatório
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
