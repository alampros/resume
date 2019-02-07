import React from 'react'
import cx from 'classnames'
import { IJobSkill } from 'data/Skill'
import TinyPie from 'components/TinyPie'
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
    return (
      <figure className={cx(styles.root, className)}>
        <figcaption>{name}</figcaption>
        <TinyPie value={importance} />
      </figure>
    )
  }
}
