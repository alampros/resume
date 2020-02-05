import React, { Component, forwardRef, Ref, SVGAttributes } from 'react'
import cx from 'classnames'

const styles = require('./TinyPie.module.css')

export type Props = {
  value: number
  innerRef?: Ref<SVGSVGElement>
} & Partial<SVGAttributes<SVGSVGElement>>

class TinyPie extends Component<Props> {
  render() {
    const {
      value,
      className,
      innerRef,
      ...passedProps
    } = this.props
    const perc = (value * 100)
    return (
      <svg
        viewBox="0 0 36 36"
        className={cx(styles.root, className)}
        {...passedProps}
        ref={innerRef}
      >
        <path
          className={styles.part}
          strokeDasharray={`${perc / 1.8}, 100`}
          d={`M18 10
            a 9 9 0 0 1 0 18
            a 9 9 0 0 1 0 -18`}
        />
      </svg>
    )
  }
}

export default forwardRef<SVGSVGElement, Props>((props, ref) => <TinyPie innerRef={ref} {...props} />)
