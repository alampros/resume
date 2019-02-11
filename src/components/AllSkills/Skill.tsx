import React from 'react'
import cx from 'classnames'
import {
  Pane,
  Card,
} from 'evergreen-ui'
import { ISkill } from 'data/Skill'
import StrengthRating from './StrengthRating'
import ExperienceRating from './ExperienceRating'

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

    const $name = link ? (
      <a href={link.toString()}>
        {name}
      </a>
    ) : name
    return (
      <Card
        className={cx(styles.root, className)}
        border="default"
        marginRight="0.5rem"
        marginBottom="0.5rem"
        elevation={1}
        flex={1}
        display="flex"
        flexDirection="column"
        paddingY="0.333em"
        paddingX="0.5em"
        flexBasis="8em"
        borderRadius={3}
      >
        <Pane marginBottom="0.25em">{$name}</Pane>
        <ExperienceRating
          yearsOfExperience={yearsOfExperience}
          name={name}
          className={styles.rating}
          marginTop="auto"
        />
        <StrengthRating
          name={name}
          strength={strength}
          className={styles.rating}
        />
      </Card>
    )
  }
}
