import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const palette = [
  { name: 'Baby Blue',    hex: '#89C4E1' },
  { name: 'Baby Pink',    hex: '#F4A7B9' },
  { name: 'Deep Navy',    hex: '#1D3557' },
  { name: 'Soft Mint',    hex: '#A8D8C8' },
  { name: 'Corporate Red', hex: '#E60012' },
  { name: 'Dark Slate',   hex: '#1C1C2E' },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [accent, setAccent] = useState(() => localStorage.getItem('accent') || '#89C4E1')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--point', accent)
    localStorage.setItem('accent', accent)
  }, [accent])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
