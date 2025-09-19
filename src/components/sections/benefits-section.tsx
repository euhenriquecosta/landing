const benefits = [
  {
    icon: "/images/01-icon.png",
    title: "Construtor Visual Drag & Drop",
    description: "Crie fluxos de captura arrastando e soltando elementos"
  },
  {
    icon: "/images/02-icon.png",
    title: "Redirecionamento Inteligente",
    description: "WhatsApp e links personalizados com dados dinâmicos"
  },
  {
    icon: "/images/03-icon.png",
    title: "CRM Integrado",
    description: "Gestão completa de leads com qualificação e funil de vendas"
  },
  {
    icon: "/images/04-icon.png",
    title: "Rastreamento Avançado",
    description: "GCLID, FBCLID e parâmetros UTM para Google Ads e Facebook Ads"
  },
  {
    icon: "/images/05-icon.png",
    title: "Webhooks Personalizados",
    description: "Integração com qualquer ferramenta via API"
  },
  {
    icon: "/images/06-icon.png",
    title: "Dashboard Estratégico",
    description: "Métricas em tempo real com filtros avançados"
  }
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-12 sm:py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4">
            Principais Diferenciais
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para transformar visitantes em leads qualificados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
