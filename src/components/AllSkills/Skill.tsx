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
  timeBeforeStale: number
}

export default class Skill extends React.Component<Props & React.HTMLProps<HTMLElement>> {
  static defaultProps = {
    timeBeforeStale: 1000 * 60 * 60 * 24 * 90, // 180 days,
  }
  render() {
    const {
      skill: {
        name,
        yearsOfExperience,
        link,
        strength,
        lastUsed,
      },
      timeBeforeStale,
      className,
    } = this.props

    let $stale
    if(lastUsed) {
      const now = new Date()
      const timeSinceLastUsed = new Date(now.getFullYear(), now.getMonth()).getTime() - lastUsed.getTime()

      if(timeSinceLastUsed > timeBeforeStale) {
        const staleFormatter = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
        })
        $stale = (
          <Pane is="small">
            Last used {staleFormatter.format(lastUsed)}
          </Pane>
        )
      }
    }

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
        <Pane>{name}</Pane>
        {link && (
          <Pane is="small">
            <a href={link.toString()}>
              {link.host}
            </a>
          </Pane>
        )}
        {$stale}
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
