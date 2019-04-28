import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import ToggleDarkMode from './ToggleDarkMode'
import DensitySelect from './DensitySelect'
const styles = require('./Toolbar.module.css')

type Props = {
} & HTMLAttributes<HTMLDivElement>

export default function Toolbar({ className, ...rest }: Props): JSX.Element {
  return (
    <div className={classNames(className, styles.root)} {...rest}>
      <span className={styles.labeledGroup}>
        <label htmlFor="info-density">Density:</label>
        <DensitySelect />
      </span>
      <span className={styles.labeledGroup}>
        <label htmlFor="toggle-dark-mode">Dark Mode:</label>
        <ToggleDarkMode id="toggle-dark-mode" />
      </span>
    </div>
  )
}
