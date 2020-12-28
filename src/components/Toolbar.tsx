import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { InformationDensity } from 'contexts/InformationDensity'

import DensitySelect from './DensitySelect'
import ToggleDarkMode from './ToggleDarkMode'

import styles from './Toolbar.module.css'

type TProps = {
  density: InformationDensity
  onDensityChange(_density: InformationDensity): void
} & HTMLAttributes<HTMLDivElement>

export const Toolbar: React.FC<TProps> = (props: TProps) => {
  const { className, density, onDensityChange, ...rest } = props
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

export default Toolbar
