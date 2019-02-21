import React from 'react'
import cx from 'classnames'
import { GoLinkExternal } from 'react-icons/go'
import { IoIosWarning } from 'react-icons/io'
import { ISkill } from 'data/Skill'
import StrengthRating from './StrengthRating'
import ExperienceRating from './ExperienceRating'

const styles = require('./Skill.module.css')

interface Props {
  skill: ISkill
  timeBeforeStale: number
}

export default class Skill extends React.Component<Props & any> {
  static defaultProps = {
    timeBeforeStale: 1000 * 60 * 60 * 24 * 365, // 1 yr,
  }
  render() {
    const {
      skill: {
        name,
        yearsOfExperience,
        link,
        strength,
        lastUsed,
        link2LD,
      },
      timeBeforeStale,
      className,
      ...passedProps
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
          <small className={styles.stale}>
            <IoIosWarning />
            <span>Last used {staleFormatter.format(lastUsed)}</span>
          </small>
        )
      }
    }

    return (
      <div className={cx(styles.root, className)} {...passedProps}>
        <div className={styles.nameLink}>
          <span>
            {name}
          </span>
          {link && (
            <small className="no-print">
              <a href={link.toString()}>
                {link2LD || link.host}
                <GoLinkExternal />
              </a>
            </small>
          )}
        </div>
        {$stale}
        <div className={styles.flexBetween}>
          <ExperienceRating
            yearsOfExperience={yearsOfExperience}
            name={name}
            className={cx(styles.rating, styles.experienceRating)}
          />
          <StrengthRating
            name={name}
            strength={strength}
            className={cx(styles.rating, styles.strengthRating)}
          />
        </div>
      </div>
    )
  }
}
