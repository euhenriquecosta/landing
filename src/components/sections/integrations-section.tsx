const features = [
  {
    title: "Webhooks Personalizados",
    description: "POST, GET, OPTION com cabeçalhos e corpo customizáveis"
  },
  {
    title: "Campos Dinâmicos",
    description: "Inserção de dados do lead no corpo da requisição"
  },
  {
    title: "Retry Automático",
    description: "Até 3 tentativas com timeout configurável"
  },
  {
    title: "Notificações por Email",
    description: "Alertas segmentados por fluxo"
  },
  {
    title: "Logs Detalhados",
    description: "Monitoramento de sucesso e falhas"
  }
]

const integrations = [
  { name: "Zapier", status: "Ativo", color: "bg-orange-500" },
  { name: "Make.com", status: "Ativo", color: "bg-blue-500" },
  { name: "Pipedrive", status: "Ativo", color: "bg-green-500" },
  { name: "HubSpot", status: "Ativo", color: "bg-purple-500" },
  { name: "Salesforce", status: "Ativo", color: "bg-blue-600" },
  { name: "RD Station", status: "Ativo", color: "bg-red-500" }
]

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Integrações e{" "}
            <span className="text-primary">Webhooks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectividade total da plataforma com qualquer ferramenta via API
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

          {/* Right Content - Integrations */}
          <div className="space-y-8">
            {/* Active Integrations */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                Integrações Ativas
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                    <div className={`w-3 h-3 ${integration.color} rounded-full`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{integration.name}</div>
                      <div className="text-xs text-muted-foreground">{integration.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Webhook Configuration */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Configuração de Webhook
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">URL do Webhook:</label>
                  <div className="bg-secondary/20 border border-border rounded p-3 font-mono text-sm">
                    https://api.exemplo.com/webhook/leadnator
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Método HTTP:</label>
                  <select className="w-full bg-secondary/20 border border-border rounded p-2 text-sm">
                    <option>POST</option>
                    <option>GET</option>
                    <option>PUT</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Cabeçalhos:</label>
                  <div className="bg-secondary/20 border border-border rounded p-3 font-mono text-xs">
                    {`{
  "Content-Type": "application/json",
  "Authorization": "Bearer token123"
}`}
                  </div>
                </div>
              </div>
            </div>

            {/* Webhook Payload Example */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Exemplo de Payload
              </h3>

              <div className="bg-secondary/20 border border-border rounded p-4">
                <pre className="text-xs text-foreground overflow-x-auto">
                  {`{
  "lead": {
    "nome": "João Silva",
    "email": "joao@email.com",
    "telefone": "(11) 99999-9999",
    "empresa": "Empresa ABC"
  },
  "fluxo": {
    "id": "fluxo-123",
    "nome": "Landing Page Black Friday"
  },
  "origem": {
    "utm_source": "google",
    "utm_campaign": "black-friday",
    "gclid": "abc123..."
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                </pre>
              </div>
            </div>

            {/* Retry Configuration */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Configuração de Retry
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tentativas:</span>
                  <span className="text-foreground font-medium">3</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Timeout:</span>
                  <span className="text-foreground font-medium">30 segundos</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Intervalo:</span>
                  <span className="text-foreground font-medium">5 minutos</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-500 font-medium">Ativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
