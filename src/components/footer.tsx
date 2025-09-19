const socialLinks = [
  { name: "Facebook", icon: "/images/rede-face.svg", url: "#" },
  { name: "Instagram", icon: "/images/rede-insta.svg", url: "#" },
  { name: "LinkedIn", icon: "/images/rede-linkedin.svg", url: "#" },
  { name: "WhatsApp", icon: "/images/rede-whatsapp.svg", url: "#" },
  { name: "YouTube", icon: "/images/rede-youtube.svg", url: "#" }
]

const footerLinks = {
  "Produto": [
    "Recursos",
    "Preços",
    "Integrações",
    "API",
    "Webhooks"
  ],
  "Empresa": [
    "Sobre",
    "Blog",
    "Carreiras",
    "Contato",
    "Imprensa"
  ],
  "Suporte": [
    "Central de Ajuda",
    "Documentação",
    "Status",
    "Comunidade",
    "Suporte Técnico"
  ],
  "Legal": [
    "Termos de Uso",
    "Política de Privacidade",
    "Cookies",
    "LGPD",
    "Segurança"
  ]
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo-leadnator.svg"
                alt="Leadnator"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforme visitantes em leads qualificados sem código.
              Plataforma completa de geração de leads com CRM integrado.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h3 className="text-foreground font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-secondary/20 border border-border rounded-xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Teste grátis por 7 dias. Sem cartão de crédito necessário.
              Setup em apenas 5 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hover:opacity-80 transition-opacity">
                <img src="/images/botao-principal.png" alt="Começar Agora" className="h-8" />
              </button>
              <button className="hover:opacity-80 transition-opacity">
                <img src="/images/Botao-rodape.png" alt="Falar com Vendas" className="h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Leadnator. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Feito com ❤️ no Brasil</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>CNPJ: 12.345.678/0001-90</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
