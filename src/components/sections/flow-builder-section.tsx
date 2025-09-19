const features = [
  "Interface intuitiva e fácil de usar",
  "Validação automática de campos",
  "Lógicas condicionais até 2 níveis",
  "Reordenação por arrastar e soltar",
  "Validação em tempo real"
]

const fieldTypes = [
  { name: "Texto Livre", description: "Campo de texto personalizável" },
  { name: "Telefone", description: "Com máscara automática" },
  { name: "E-mail", description: "Validação automática" },
  { name: "Select", description: "Opções customizáveis" }
]

export function FlowBuilderSection() {
  return (
    <section id="construtor" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Construtor Visual{" "}
                <span className="text-primary">Sem Código</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Crie fluxos de captura profissionais arrastando e soltando elementos.
                Interface intuitiva que qualquer pessoa pode usar.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Principais Vantagens:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Field Types */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Tipos de Campos Suportados:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {fieldTypes.map((field, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground">{field.name}</h4>
                    <p className="text-sm text-muted-foreground">{field.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Painel de Configuração
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Drag & Drop de campos
                  </p>
                </div>

                {/* Mockup Fields */}
                <div className="space-y-4">
                  <div className="bg-secondary/20 border-2 border-dashed border-primary/30 rounded-lg p-4 text-center">
                    <span className="text-sm text-muted-foreground">
                      Arraste campos aqui
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                      <span className="text-xs text-primary font-medium">Texto</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                      <span className="text-xs text-primary font-medium">Telefone</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                      <span className="text-xs text-primary font-medium">E-mail</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                      <span className="text-xs text-primary font-medium">Select</span>
                    </div>
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
