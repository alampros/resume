import { createContext } from 'react'

export interface IDarkModeContext {
  darkMode: boolean
  setDarkMode: (_v: boolean) => void
}

export const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  setDarkMode: () => {},
})
