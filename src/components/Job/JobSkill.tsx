import React, { FunctionComponent, useContext } from 'react'
import cx from 'classnames'
import Tippy from '@tippy.js/react'
import { IJobSkill } from 'data/Skill'
import TinyPie from 'components/TinyPie'
import 'tippy.js/themes/light-border.css'
import { InformationDensityContext } from 'contexts/InformationDensity'

const styles = require('./JobSkill.module.css')

interface Props extends IJobSkill {
}

export const JobSkill: FunctionComponent<Props & React.HTMLProps<HTMLElement>> = (props: Props & React.HTMLProps<HTMLElement>) => {
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
        className={cx(styles.root, styles.fig, className)}
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
      className={cx(styles.root, className)}
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
          <TinyPie value={relevance} />
        </figure>
      </Tippy>
    </span>
  )
}

export default JobSkill
