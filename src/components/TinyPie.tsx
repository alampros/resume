import React, { forwardRef, Ref, SVGAttributes } from 'react'
import clsx from 'clsx'

import styles from './TinyPie.module.css'

export type TProps = {
  value: number
  innerRef?: Ref<SVGSVGElement>
} & Partial<SVGAttributes<SVGSVGElement>>

const TinyPie: React.FC<TProps> = (props: TProps) => {
  const {
    value,
    className,
    innerRef,
    ...passedProps
  } = props
  const perc = (value * 100)
  return (
    <svg
      viewBox="0 0 36 36"
      className={clsx(styles.root, className)}
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

export default forwardRef<SVGSVGElement, TProps>((props, ref) => <TinyPie innerRef={ref} {...props} />)
