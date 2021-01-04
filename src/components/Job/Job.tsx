import React, { useContext } from 'react'

import DateRange from 'components/DateRange'
import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { IJobDescriptor } from 'data/Job'

import Company from './Company'
import JobSkills from './JobSkills'
import Project from './Project'

import styles from './Job.module.css'

type TProps = IJobDescriptor

export const Job: React.FC<TProps> = (props: TProps) => {
  const {
    title,
    company,
    department,
    description,
    projects,
    date,
    skills,
  } = props
  const {
    density,
  } = useContext(InformationDensityContext)

  const $projects = density === 'sparse'
    ? null
    : projects.map(project => (
      <Project key={project.description} project={project} />
    ))

  return (
    <article className={styles.root}>
      <header>
        <h3 aria-label={title}>{title}</h3>
        <DateRange {...date} className={styles.dateRange} />
        <Company {...company} department={department} className={styles.company} />
      </header>
      {description && (
        <>
          <h4>Primary Responsibilities:</h4>
          <div className={styles.desc}>{description}</div>
        </>
      )}
      <JobSkills skills={skills} />
      {$projects && $projects.length > 0 && (
        <>
          <h4>Notable Projects:</h4>
          <ul className={styles.projects}>
            {$projects}
          </ul>
        </>
      )}
    </article>
  )
}

export default Job
