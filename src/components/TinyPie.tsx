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
    return (
      <svg viewBox="0 0 36 36" className={cx(styles.root, className)} {...passedProps}>
        <path
          className={styles.part}
          strokeDasharray={`${perc / 2}, 100`}
          d={`M18 10
            a 9 9 0 0 1 0 18
            a 9 9 0 0 1 0 -18`
          }
        />
      </svg>
    )
  }
}
