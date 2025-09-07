import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-6 z-50 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      data-testid="button-theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </button>
  )
}
