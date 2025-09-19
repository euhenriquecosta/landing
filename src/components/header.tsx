export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo-leadnator.svg"
            alt="Leadnator"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#construtor" className="text-foreground hover:text-primary transition-colors">
            Construtor
          </a>
          <a href="#crm" className="text-foreground hover:text-primary transition-colors">
            CRM
          </a>
          <a href="#precos" className="text-foreground hover:text-primary transition-colors">
            Preços
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hover:opacity-80 transition-opacity">
            <img src="/images/botao-login.png" alt="Login" className="h-8" />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <img src="/images/botao-teste-gratis.png" alt="Teste Grátis" className="h-8" />
          </button>
        </div>
      </div>
    </header>
  )
}
