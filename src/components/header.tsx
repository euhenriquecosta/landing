import { useState } from 'react'
import { useNavigation } from '@/hooks/useNavigation'

export function Header() {
  const { handleLogin, handleRegister } = useNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border w-full">
        <div className="w-full px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo-leadnator.svg"
              alt="Leadnator"
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleLogin}
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/images/botao-login.png" alt="Login" className="h-8" />
            </button>
            <button
              onClick={handleRegister}
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/images/botao-teste-gratis.png" alt="Teste Grátis" className="h-8" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors bg-secondary/20 rounded-lg"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-16 right-0 w-72 sm:w-80 h-full bg-background border-l border-border shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-4 sm:p-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <a
                  href="#beneficios"
                  className="block text-foreground hover:text-primary transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Benefícios
                </a>
                <a
                  href="#construtor"
                  className="block text-foreground hover:text-primary transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Construtor
                </a>
                <a
                  href="#crm"
                  className="block text-foreground hover:text-primary transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  CRM
                </a>
                <a
                  href="#precos"
                  className="block text-foreground hover:text-primary transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Preços
                </a>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="flex gap-4 justify-center sm:flex-row sm:gap-4">
                <button
                  onClick={() => {
                    handleLogin()
                    closeMenu()
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src="/images/botao-login.png" alt="Login" className="h-6 sm:h-8 mx-auto" />
                </button>
                <button
                  onClick={() => {
                    handleRegister()
                    closeMenu()
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src="/images/botao-teste-gratis.png" alt="Teste Grátis" className="h-6 sm:h-8 mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
