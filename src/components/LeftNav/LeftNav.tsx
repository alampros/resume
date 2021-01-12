import React from 'react'
import { Box, GridProps } from '@material-ui/core'
import clsx from 'clsx'

import DensitySelect from '../DensitySelect'
import ToggleDarkMode from '../ToggleDarkMode'

import { ControlGroup } from './ControlGroup'

import styles from './LeftNav.module.css'

export const LeftNav = (props: GridProps) => {
  const { className, ...rest } = props
  return (
    <Box
      className={clsx(styles.root, className, 'no-print')}
      direction="column"
      alignItems="stretch"
      px={3}
      {...rest}
    >
      <ControlGroup label="Theme:" labelProps={{ id: 'label-theme-toggle' }}>
        <ToggleDarkMode id="toggle-dark-mode" aria-labelledby="label-theme-toggle" />
      </ControlGroup>
      <ControlGroup label="Information Density:" labelProps={{ id: 'label-density-select' }}>
        <Box px={4}>
          <DensitySelect aria-labelledby="label-density-select" style={{ width: '100%' }} />
        </Box>
      </ControlGroup>
    </Box>
  )
}
