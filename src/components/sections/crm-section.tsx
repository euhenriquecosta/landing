const features = [
  {
    title: "Gestão Visual",
    description: "Kanban board com estágios personalizáveis (Contactar, Contato Realizado, Negociação, Fechado)"
  },
  {
    title: "Qualificação de Leads",
    description: "Status automático (Qualificar, Qualificado, Desqualificado)"
  },
  {
    title: "Campos Dinâmicos",
    description: "Herança automática de campos criados nos fluxos"
  },
  {
    title: "Edição Inline",
    description: "Modificação de dados diretamente na tabela"
  },
  {
    title: "Histórico Completo",
    description: "Timeline de interações e mudanças de status"
  }
]

const kanbanStages = [
  { name: "Contactar", count: 12, color: "bg-yellow-500" },
  { name: "Contato Realizado", count: 8, color: "bg-blue-500" },
  { name: "Negociação", count: 5, color: "bg-orange-500" },
  { name: "Fechado", count: 3, color: "bg-green-500" }
]

const sampleLeads = [
  { name: "João Silva", email: "joao@email.com", status: "Contactar", value: "R$ 2.500" },
  { name: "Maria Santos", email: "maria@email.com", status: "Negociação", value: "R$ 5.000" },
  { name: "Pedro Costa", email: "pedro@email.com", status: "Fechado", value: "R$ 1.200" }
]

export function CrmSection() {
  return (
    <section id="crm" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            CRM{" "}
            <span className="text-primary">Integrado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema de gestão de leads completo com qualificação e funil de vendas
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

          {/* Right Content - CRM Interface */}
          <div className="space-y-8">
            {/* Kanban Board */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                Kanban Board
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {kanbanStages.map((stage, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-full h-2 ${stage.color} rounded-full mb-2`}></div>
                    <div className="text-sm font-medium text-foreground">{stage.name}</div>
                    <div className="text-xs text-muted-foreground">{stage.count} leads</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Lista de Leads
              </h3>

              <div className="space-y-3">
                {sampleLeads.map((lead, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">{lead.email}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{lead.value}</div>
                      <div className="text-xs text-muted-foreground">{lead.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Example */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Timeline de Interações
              </h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-foreground">Lead criado</div>
                    <div className="text-xs text-muted-foreground">Há 2 horas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-foreground">Status alterado para "Negociação"</div>
                    <div className="text-xs text-muted-foreground">Há 1 hora</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-foreground">Lead qualificado</div>
                    <div className="text-xs text-muted-foreground">Há 30 minutos</div>
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
