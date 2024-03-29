import React, { FunctionComponent, useContext } from 'react'
import Tippy from '@tippyjs/react'
import clsx from 'clsx'

import TinyPie from 'components/TinyPie'
import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { IJobSkill } from 'data/Skill'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light-border.css'
import * as styles from './JobSkill.module.css'

type TProps = IJobSkill & React.HTMLProps<HTMLElement>

export const JobSkill: FunctionComponent<TProps> = (props: TProps) => {
  const {
    skill: {
      name,
    },
    relevance,
    className,
  } = props
  const { density } = useContext(InformationDensityContext)
  if(density === 'sparse' || typeof relevance === 'undefined') {
    return (
      <span
        className={clsx(styles.root, styles.fig, className)}
        aria-label={name}
      >
        {name}
      </span>
    )
  }

  const perc = (relevance * 100).toFixed(0)
  const $tipContent = (
    <div className={styles.tip}>
      {name} was relevant to <em>~<strong>{perc}%</strong></em> of my core responsibilities at this job.
    </div>
  )
  return (
    <span
      className={clsx(styles.root, className)}
      aria-label={`${name} was approximately ${perc}% relevant to this job`}
    >
      <Tippy
        content={$tipContent}
        theme="light-border"
        trigger="mouseenter focus click"
        arrow
      >
        <figure className={styles.fig} aria-hidden>
          <figcaption>{name}</figcaption>
          <TinyPie value={relevance} className="no-print" />
        </figure>
      </Tippy>
    </span>
  )
}

export default JobSkill
