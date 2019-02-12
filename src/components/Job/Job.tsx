import React from 'react'
import Company from './Company'
import { IJobDescriptor } from 'data/jobs/Job'
import DateRange from 'components/DateRange'
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
      date,
      skills,
    } = this.props
    return (
      <section className={styles.root}>
        <header>
          <h3 aria-label={title}>{title}</h3>
          <DateRange {...date} className={styles.dateRange} />
          <Company {...company} department={department} className={styles.company} />
        </header>
        {description && description.html && (
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description.html }} />
        )}
        <JobSkills skills={skills} />
      </section>
    )
  }
}
