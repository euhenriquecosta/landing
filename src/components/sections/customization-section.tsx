const features = [
  {
    title: "Tamanhos Responsivos",
    description: "P, M, G para desktop e mobile (full screen)"
  },
  {
    title: "Temas Pré-montados",
    description: "Incluindo visual WhatsApp para familiaridade"
  },
  {
    title: "Personalização Granular",
    description: "Cores RGB para cabeçalho, texto e balões"
  },
  {
    title: "Responsividade Mobile",
    description: "Adaptação automática para diferentes dispositivos"
  },
  {
    title: "Identidade de Marca",
    description: "Alinhamento visual com a identidade do cliente"
  }
]

const themes = [
  { name: "Padrão", color: "bg-blue-500" },
  { name: "WhatsApp", color: "bg-green-500" },
  { name: "Escuro", color: "bg-gray-800" },
  { name: "Claro", color: "bg-gray-100" }
]

export function CustomizationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Personalização e{" "}
            <span className="text-primary">Temas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexibilidade visual total para alinhar com sua identidade de marca
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

          {/* Right Content - Theme Examples */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Temas Disponíveis
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {themes.map((theme, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${theme.color} rounded-lg mx-auto mb-2 shadow-lg`}></div>
                    <span className="text-sm text-foreground">{theme.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                Tamanhos Responsivos
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Desktop:</span>
                  <div className="flex space-x-2">
                    <div className="w-8 h-6 bg-primary/20 rounded text-xs flex items-center justify-center">P</div>
                    <div className="w-12 h-6 bg-primary/40 rounded text-xs flex items-center justify-center">M</div>
                    <div className="w-16 h-6 bg-primary rounded text-xs flex items-center justify-center text-white">G</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mobile:</span>
                  <div className="w-20 h-8 bg-primary rounded text-xs flex items-center justify-center text-white">
                    Full Screen
                  </div>
                </div>
              </div>
            </div>

            {/* Color Customization */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                Personalização de Cores
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cabeçalho:</span>
                  <div className="w-8 h-8 bg-primary rounded border-2 border-border"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Texto:</span>
                  <div className="w-8 h-8 bg-foreground rounded border-2 border-border"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Balões:</span>
                  <div className="w-8 h-8 bg-accent rounded border-2 border-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
