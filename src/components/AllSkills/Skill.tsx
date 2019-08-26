import React from 'react'
import cx from 'classnames'
import { GoLinkExternal } from 'react-icons/go'
import { IoIosWarning } from 'react-icons/io'
import { ISkill } from 'data/Skill'
import StrengthRating from './StrengthRating'
import ExperienceRating from './ExperienceRating'
import { InformationDensityContext } from 'contexts/InformationDensity'

const styles = require('./Skill.module.css')

interface Props {
  skill: ISkill
  timeBeforeStale: number
}

export default class Skill extends React.Component<Props & any> {
  static contextType = InformationDensityContext
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
    const {
      density,
    } = this.context

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
            <span>{'Last used ' + staleFormatter.format(lastUsed)}</span>
          </small>
        )
      }
    }

    const $experienceRating = density !== 'sparse' && (
      <ExperienceRating
        yearsOfExperience={yearsOfExperience}
        name={name}
        className={cx(styles.rating, styles.experienceRating)}
      />
    )
    const $strengthRating = density !== 'sparse' && (
      <StrengthRating
        name={name}
        strength={strength}
        className={cx(styles.rating, styles.strengthRating)}
      />
    )
    return (
      <div className={cx(styles.root, className)} {...passedProps}>
        <div className={styles.nameLink}>
          <span>
            {name}
          </span>
          {link && (
            <small className="no-print">
              <a href={link.toString()}>
                <span>{link2LD || link.host}</span>
                <GoLinkExternal />
              </a>
            </small>
          )}
        </div>
        {$stale}
        {($experienceRating || $strengthRating) ? (
          <div className={styles.ratings}>
            {$experienceRating}
            {$strengthRating}
          </div>
        ) : null}
      </div>
    )
  }
}
