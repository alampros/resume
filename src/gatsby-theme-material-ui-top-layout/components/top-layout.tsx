import React, { PropsWithChildren, useMemo } from 'react'
import { createMuiTheme, Theme } from '@material-ui/core'
// @ts-ignore
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout' // eslint-disable-line

import DarkModeContextProvider from 'components/DarkModeContextProvider'
import useDarkMode from 'hooks/useDarkMode'

type TProps = PropsWithChildren<{
  theme: Theme
}>

const InnerLayout: React.FC<TProps> = ({ children, theme }: TProps) => {
  const [darkMode] = useDarkMode()
  const dynamicTheme = useMemo(() => {
    theme.palette.type = darkMode ? 'dark' : 'light'
    return createMuiTheme(theme)
  }, [darkMode, theme])
  return (
    <ThemeTopLayout theme={dynamicTheme}>{children}</ThemeTopLayout>
  )
}

const TopLayout = ({ children, ...passedProps }: TProps) => (
  <DarkModeContextProvider>
    <InnerLayout {...passedProps}>{children}</InnerLayout>
  </DarkModeContextProvider>
)

export default TopLayout
