import { useContext } from 'react'

import { DarkModeContext } from 'contexts/DarkModeContext'

export default function useDarkMode(): [boolean, (_enabled: boolean) => void] {
  const {
    darkMode,
    setDarkMode,
  } = useContext(DarkModeContext)
  return [darkMode, setDarkMode]
}
