const plans = [
  {
    name: "Bronze",
    domains: "1 domínio",
    price: "R$ 97",
    period: "/mês",
    description: "Recursos essenciais para começar",
    features: [
      "Construtor visual drag & drop",
      "Redirecionamento WhatsApp",
      "CRM básico",
      "Rastreamento UTM",
      "Suporte por email"
    ],
    popular: false,
    color: "border-yellow-500"
  },
  {
    name: "Prata",
    domains: "Até 5 domínios",
    price: "R$ 197",
    period: "/mês",
    description: "Recursos intermediários para crescimento",
    features: [
      "Tudo do Bronze",
      "Webhooks personalizados",
      "Dashboard avançado",
      "Integrações ilimitadas",
      "Suporte prioritário",
      "Relatórios customizados"
    ],
    popular: true,
    color: "border-gray-400"
  },
  {
    name: "Ouro",
    domains: "Até 10 domínios",
    price: "R$ 397",
    period: "/mês",
    description: "Recursos avançados para empresas",
    features: [
      "Tudo do Prata",
      "API completa",
      "White-label",
      "Suporte dedicado",
      "Treinamento personalizado",
      "SLA garantido"
    ],
    popular: false,
    color: "border-yellow-600"
  },
  {
    name: "Personalizado",
    domains: "Sob demanda",
    price: "Sob consulta",
    period: "",
    description: "Limites sob demanda, recursos enterprise",
    features: [
      "Tudo do Ouro",
      "Domínios ilimitados",
      "Desenvolvimento customizado",
      "Suporte 24/7",
      "Gerente de conta dedicado",
      "Integração personalizada"
    ],
    popular: false,
    color: "border-primary"
  }
]

export function PricingSection() {
  return (
    <section id="precos" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Planos e{" "}
            <span className="text-primary">Preços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para seu negócio. Teste grátis por 7 dias em qualquer plano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 rounded-xl p-8 ${plan.popular
                ? 'border-primary shadow-lg scale-105'
                : plan.color
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.domains}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.popular
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border'
                  }`}
              >
                {plan.name === 'Personalizado' ? 'Falar com Vendas' : 'Começar Teste Grátis'}
              </button>
            </div>
          ))}
        </div>

        {/* Teste Gratuito */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Teste Grátis por 7 Dias
            </h3>
            <p className="text-muted-foreground mb-6">
              Experimente todos os recursos sem compromisso. Sem cartão de crédito necessário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hover:opacity-80 transition-opacity">
                <img src="/images/botao-teste-gratis.png" alt="Teste Grátis" className="h-8" />
              </button>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <img src="/images/icon-sem-cartao.svg" alt="Sem cartão" className="h-4" />
                <span>Sem cartão de crédito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
