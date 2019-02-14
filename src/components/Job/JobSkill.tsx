import React from 'react'
import cx from 'classnames'
import Tippy from '@tippy.js/react'
import { IJobSkill } from 'data/Skill'
import TinyPie from 'components/TinyPie'
import 'tippy.js/themes/light-border.css'

const styles = require('./JobSkill.module.css')

interface Props extends IJobSkill {
}

export default class JobSkill extends React.Component<Props & React.HTMLProps<HTMLElement>> {
  render() {
    const {
      skill: {
        name,
      },
      relevance,
      className,
    } = this.props
    const perc = (relevance * 100).toFixed(0)
    const $tipContent = (
      <div className={styles.tip}>
        {name} was relevant to <em>~<strong>{perc}%</strong></em> of my core responsibilities at this job.
      </div>
    )
    return (
      <figure
        className={cx(styles.root, className)}
        aria-label={`${name} was approximately ${perc}% relevant to this job`}
      >
        <Tippy
          content={$tipContent}
          theme="light-border"
          trigger="mouseenter focus click"
          arrow
        >
          <div className={styles.inner} aria-hidden>
            <figcaption>{name}</figcaption>
            <TinyPie value={relevance} />
          </div>
        </Tippy>
      </figure>
    )
  }
}
