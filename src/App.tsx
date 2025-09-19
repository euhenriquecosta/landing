import { Header } from './components/header'
import { HeroSection } from './components/sections/hero-section'
import { BenefitsSection } from './components/sections/benefits-section'
import { FlowBuilderSection } from './components/sections/flow-builder-section'
import { SmartRedirectSection } from './components/sections/smart-redirect-section'
import { CustomizationSection } from './components/sections/customization-section'
import { TrackingSection } from './components/sections/tracking-section'
import { CrmSection } from './components/sections/crm-section'
import { DashboardSection } from './components/sections/dashboard-section'
import { IntegrationsSection } from './components/sections/integrations-section'
import { PricingSection } from './components/sections/pricing-section'
import { ImplementationSection } from './components/sections/implementation-section'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full">
        <HeroSection />
        <BenefitsSection />
        <FlowBuilderSection />
        <SmartRedirectSection />
        <CustomizationSection />
        <TrackingSection />
        <CrmSection />
        <DashboardSection />
        <IntegrationsSection />
        <PricingSection />
        <ImplementationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
