import React from 'react'
import cx from 'classnames'
import Tippy from '@tippy.js/react'
import { IJobSkill } from 'data/Skill'
import TinyPie from 'components/TinyPie'
import SkillExperience from 'components/SkillExperience'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/themes/light-border.css'

const styles = require('./Skill.module.css')

interface Props extends IJobSkill {
}

export default class Skill extends React.Component<Props & React.HTMLProps<HTMLElement>> {
  render() {
    const {
      skill: {
        name,
        yearsOfExperience,
        // link,
      },
      importance,
      className,
    } = this.props
    const perc = (importance * 100).toFixed(0)
    const $tipContent = (
      <div className={styles.tip}>
        This skill was relevant to <em>~<strong>{perc}%</strong></em> of my core responsibilities at this job.
      </div>
    )
    return (
      <figure className={cx(styles.root, className)}>
        <div className={styles.inner}>
          <figcaption>{name}</figcaption>
          <Tippy
            content={$tipContent}
            delay={[500, 0]}
            theme="light-border"
            trigger="mouseenter focus click"
            arrow
          >
            <TinyPie value={importance} />
          </Tippy>
        </div>
        <small><SkillExperience yearsOfExperience={yearsOfExperience} /></small>
      </figure>
    )
  }
}
