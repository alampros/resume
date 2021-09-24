import React, { useContext } from 'react'
import { GoLinkExternal } from 'react-icons/go'
import { IoIosWarning } from 'react-icons/io'
import clsx from 'clsx'

import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { ISkill } from 'data/Skill'

import ExperienceRating from './ExperienceRating'
import StrengthRating from './StrengthRating'

import * as styles from './Skill.module.css'

type TProps = {
  skill: ISkill
  timeBeforeStale?: number
} & React.HTMLProps<HTMLDivElement>

export const Skill: React.FC<TProps> = (props: TProps) => {
  const {
    skill: {
      name,
      yearsOfExperience,
      link,
      strength,
      lastUsed,
      link2LD,
    },
    timeBeforeStale = 1000 * 60 * 60 * 24 * 365, // 1 yr,
    className,
    ...passedProps
  } = props
  const {
    density,
  } = useContext(InformationDensityContext)

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
      className={clsx(styles.rating)}
    />
  )
  const $strengthRating = density !== 'sparse' && (
    <StrengthRating
      name={name}
      strength={strength}
      className={clsx(styles.rating, styles.strengthRating)}
    />
  )
  return (
    <div className={clsx(styles.root, className)} {...passedProps}>
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
      {($experienceRating || $strengthRating)
        ? (
          <div className={styles.ratings}>
            {$experienceRating}
            {$strengthRating}
          </div>
        )
        : null}
    </div>
  )
}

export default Skill
