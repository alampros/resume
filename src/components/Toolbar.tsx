import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import ToggleDarkMode from './ToggleDarkMode'
import DensitySelect from './DensitySelect'
import { InformationDensity } from 'contexts/InformationDensity'
const styles = require('./Toolbar.module.css')

type Props = {
  density: InformationDensity
  onDensityChange(density: InformationDensity): void
} & HTMLAttributes<HTMLDivElement>

export default function Toolbar({ className, density, onDensityChange, ...rest }: Props): JSX.Element {
  return (
    <div className={classNames(className, 'no-print', styles.root)} {...rest}>
      <span className={styles.labeledGroup}>
        <label htmlFor="info-density">Density:</label>
        <DensitySelect density={density} onDensityChange={onDensityChange} />
      </span>
      <span className={styles.labeledGroup}>
        <label htmlFor="toggle-dark-mode">Dark Mode:</label>
        <ToggleDarkMode id="toggle-dark-mode" />
      </span>
    </div>
  )
}
