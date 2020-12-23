import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { InformationDensity } from 'contexts/InformationDensity'

import DensitySelect from './DensitySelect'
import ToggleDarkMode from './ToggleDarkMode'

import styles from './Toolbar.module.css'

type Props = {
  density: InformationDensity
  onDensityChange(_density: InformationDensity): void
} & HTMLAttributes<HTMLDivElement>

export default function Toolbar({ className, density, onDensityChange, ...rest }: Props): React.ReactElement {
  return (
    <div className={classNames(className, 'no-print', styles.root)} {...rest}>
      <span className={styles.labeledGroup}>
        <label htmlFor="info-density">Density:</label>
        <DensitySelect density={density} onDensityChange={onDensityChange} />
      </span>
      <span className={styles.labeledGroup}>
        <label htmlFor="toggle-dark-mode">Theme:</label>
        <ToggleDarkMode id="toggle-dark-mode" />
      </span>
    </div>
  )
}
