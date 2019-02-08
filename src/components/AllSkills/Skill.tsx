import React from 'react'
import cx from 'classnames'
import { ISkill } from 'data/Skill'

const styles = require('./Skill.module.css')

interface Props {
  skill: ISkill
}

export default class Skill extends React.Component<Props & React.HTMLProps<HTMLElement>> {
  render() {
    const {
      skill: {
        name,
        yearsOfExperience,
        link,
        strength,
      },
      className,
    } = this.props
    return (
      <div className={cx(styles.root, className)}>
        <div>{name}</div>
        {link && (<div>{link.toString()}</div>)}
        <div>{yearsOfExperience}</div>
        <div>{strength}</div>
      </div>
    )
  }
}
