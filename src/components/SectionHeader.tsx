import React from 'react'
import { useTheme } from '@material-ui/core'
import clsx from 'clsx'

import styles from './SectionHeader.module.css'

type TProps = React.PropsWithChildren<{
  title: React.ReactNode
}> & Omit<React.HTMLProps<HTMLElement>, 'title'>

export const SectionHeader: React.FC<TProps> = (props: TProps) => {
  const {
    title,
    className,
    children,
    ...passedProps
  } = props
  const theme = useTheme()
  return (
    <section className={clsx(className, styles.root)} {...passedProps}>
      <header style={{ minHeight: theme.mixins.toolbar.minHeight }}>
        <h2>{title}</h2>
        <hr aria-hidden />
      </header>
      {children}
    </section>
  )
}

export default SectionHeader
