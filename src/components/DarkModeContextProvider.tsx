import React, { PropsWithChildren, useEffect } from 'react'

import { DarkModeContext } from 'contexts/DarkModeContext'
import useLocalStorage from 'hooks/useLocalStorage'
import useMedia from 'hooks/useMedia'

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}

type TProps = PropsWithChildren<{}>
export const DarkModeContextProvider = ({ children }: TProps) => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')
  const prefersDarkMode = usePrefersDarkMode()
  const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode
  useEffect(
    () => {
      if(typeof window === 'undefined') return
      const className = 'dark-mode'
      const element = window.document.body
      if(enabled) {
        element.classList.add(className)
      } else {
        element.classList.remove(className)
      }
    },
    [enabled]
  )
  return (
    <DarkModeContext.Provider value={{
      darkMode: enabled,
      setDarkMode: setEnabledState,
    }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider
