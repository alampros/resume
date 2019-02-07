import React from 'react'
import cx from 'classnames'
import Tippy from '@tippy.js/react'
import { IJobSkill } from 'data/Skill'
import TinyPie from 'components/TinyPie'
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
      },
      importance,
      className,
    } = this.props
    const perc = (importance * 100).toFixed(0)
    return (
      <Tippy
        content={<span>~<strong>{perc}%</strong> of my daily work at this job involved this skill.</span>}
        delay={[500, 0]}
        theme="light-border"
        trigger="mouseenter focus click"
        arrow
      >
        <figure className={cx(styles.root, className)}>
          <figcaption>{name}</figcaption>
          <TinyPie value={importance} />
        </figure>
      </Tippy>
    )
  }
}
