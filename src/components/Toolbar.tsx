import React from 'react'
import { Box, Grid, GridProps, Typography } from '@material-ui/core'
import clsx from 'clsx'

import DensitySelect from './DensitySelect'
import ToggleDarkMode from './ToggleDarkMode'

import styles from './Toolbar.module.css'

type TProps = GridProps

export const Toolbar: React.FC<TProps> = (props: TProps) => {
  const { className, ...rest } = props
  return (
    <Box mb={4}>
      <Grid
      className={clsx(className, 'no-print', styles.root)}
      container
      spacing={2}
      alignItems="flex-start"
      justify="space-around"
      {...rest}
      >
        <Grid item xs={4}>
          <Typography id="label-density-select" gutterBottom align="center">
            Information Density:
          </Typography>
          <DensitySelect aria-labelledby="label-density-select" />
        </Grid>
        <Grid item className={styles.labeledGroup} xs={3}>
          <Typography id="label-theme-toggle" gutterBottom align="center">
            Theme:
          </Typography>
          <ToggleDarkMode id="toggle-dark-mode" aria-labelledby="label-theme-toggle" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Toolbar
