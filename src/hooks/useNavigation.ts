export function useNavigation() {
  const appUrl = import.meta.env.VITE_APP_URL || 'https://app.leadnator.com.br'

  const handleLogin = () => {
    window.location.href = `${appUrl}/auth`
  }

  const handleRegister = () => {
    window.location.href = `${appUrl}/auth?tab=register`
  }

  return {
    handleLogin,
    handleRegister
  }
}
