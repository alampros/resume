import React from 'react'
import cx from 'classnames'
const styles = require('./TinyPie.module.css')

interface Props {
  value: number
}

export default class TinyPie extends React.Component<Props & React.SVGAttributes<SVGElement>> {
  render() {
    const {
      value,
      className,
      ...passedProps
    } = this.props
    const perc = value * 100
    const s = {
      strokeDasharray: `${perc} ${100 - perc}`,
    }
    return (
      <svg viewBox="0 0 32 32" className={cx(styles.root, className)} {...passedProps}>
        <circle r="25%" cx="50%" cy="50%" className={styles.part} style={s} transform="rotate(-90, 16, 16)" pathLength={100} />
      </svg>
    )
  }
}
