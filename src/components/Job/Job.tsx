import React from 'react'

import DateRange from 'components/DateRange'
import { InformationDensityContext } from 'contexts/InformationDensity'
import { IJobDescriptor } from 'data/Job'

import Company from './Company'
import JobSkills from './JobSkills'
import Project from './Project'

import styles from './Job.module.css'

interface Props extends IJobDescriptor {
}

export default class Job extends React.Component<Props> {
  static contextType = InformationDensityContext
  render() {
    const {
      title,
      company,
      department,
      description,
      projects,
      date,
      skills,
    } = this.props
    const {
      density,
    } = this.context

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
}
