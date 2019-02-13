import React from 'react'
import Company from './Company'
import { IJobDescriptor } from 'data/Job'
import DateRange from 'components/DateRange'
import Project from './Project'
import JobSkills from './JobSkills'
const styles = require('./Job.module.css')

interface Props extends IJobDescriptor {
}

export default class Job extends React.Component<Props> {
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

    const $projects = projects.map(project => (
      <Project key={project.description} project={project} />
    ))

    return (
      <section className={styles.root}>
        <header>
          <h3 aria-label={title}>{title}</h3>
          <DateRange {...date} className={styles.dateRange} />
          <Company {...company} department={department} className={styles.company} />
        </header>
        {description && <div className={styles.desc}>{description}</div>}
        {$projects.length > 0 && (
          <>
            <h4>Notable Projects:</h4>
            <ul className={styles.projects}>
              {$projects}
            </ul>
          </>
        )}
        <JobSkills skills={skills} />
      </section>
    )
  }
}
