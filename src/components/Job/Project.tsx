import React, { useContext, useMemo } from 'react'

import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { IProject } from 'data/Project'

import JobSkill from './JobSkill'
import ProjectSkillsetsVis from './ProjectSkillsetsVis'

import styles from './Job.module.css'

type TProps = {
  project: IProject
}

export const Project: React.FC<TProps> = (props: TProps) => {
  const {
    project,
  } = props
  const {
    density,
  } = useContext(InformationDensityContext)
  const {
    title,
    description,
    descriptionDetail,
    skills = [],
  } = project
  const $title = useMemo(() => {
    if(density === 'sparse' || !title) {
      return null
    }
    return <h5 className="bordered-header">{title}</h5>
  }, [density, title])
  const $skills = useMemo(() => {
    if(density === 'dense' && skills.length > 0) {
      return (
        <ul className={styles.skills}>
          {skills.map(skill => <li key={skill.id}><JobSkill skill={skill} /></li>)}
        </ul>
      )
    }
    return null
  }, [density, skills])
  const $skillSets = useMemo(() => {
    if(density === 'dense' && project.skillsetRatings && Object.keys(project.skillsetRatings).length > 0) {
      return <ProjectSkillsetsVis project={project} className={styles.skillSetsVis} />
    }
    return null
  }, [density, project])
  const desc = density === 'sparse' ? description : descriptionDetail || description
  const $description = desc && (
    <div className={styles.description}>{desc}</div>
  )
  const $skillsFigure = ($skills || $skillSets)
    ? (
      <figure className={styles.figure}>
        <figcaption className="sr-only bordered-header">Leveraged Skills</figcaption>
        {$skillSets}
        {$skills}
      </figure>
    )
    : null
  const $wrappedTitleDescription = ($title && $description)
    ? (
      <div>
        {$title}
        {$description}
      </div>
    )
    : (
      <>
        {$title}
        {$description}
      </>
    )
  return (
    <li className={styles.project}>
      {($wrappedTitleDescription && $skillsFigure)
        ? (
          <div className={styles.flexWrapper}>
            {$wrappedTitleDescription}
            {$skillsFigure}
          </div>
        )
        : (
          <>
            {$wrappedTitleDescription}
            {$skillsFigure}
          </>
        )}
    </li>
  )
}

export default Project
