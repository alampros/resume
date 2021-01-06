import React from 'react'
import { Grid, GridProps, Typography } from '@material-ui/core'
import classNames from 'classnames'

import DensitySelect from './DensitySelect'
import ToggleDarkMode from './ToggleDarkMode'

import styles from './LeftNav.module.css'

export const LeftNav = (props: GridProps) => {
  const { className, ...rest } = props
  return (
    <div className={styles.root}>
      <Grid
      className={classNames(className, 'no-print')}
      container
      spacing={2}
      direction="column"
      alignItems="center"
      {...rest}
      >
        <Grid item xs={12}>
          <Typography id="label-density-select" gutterBottom align="center">
            Information Density:
          </Typography>
          <DensitySelect aria-labelledby="label-density-select" />
        </Grid>
        <Grid item className={styles.labeledGroup} xs={12}>
          <Typography id="label-theme-toggle" gutterBottom align="center">
            Theme:
          </Typography>
          <ToggleDarkMode id="toggle-dark-mode" aria-labelledby="label-theme-toggle" />
        </Grid>
      </Grid>
    </div>
  )
}
