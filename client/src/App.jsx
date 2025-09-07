import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './contexts/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Academics } from './pages/Academics'
import { Contact } from './pages/Contact'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

function App() {
  return (
    
      <ThemeProvider>
          <Toaster position="top-right" reverseOrder={false} />
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <ThemeToggle />

          <main>
            <Home />
            <About />
            <Projects />
            <Academics />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="py-8 border-t border-border bg-card/50"
            style={{
              backgroundColor: "hsl(var(--background))",
              color: "hsl(var(--foreground))",
            }}>
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground">
                © 2025 Sahil Singh. Built with React, Three.js, and 🩷.
              </p>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    
  )
}

export default App