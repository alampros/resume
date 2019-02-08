import React from 'react'
import Company from './Company'
import { IJobDescriptor } from 'data/jobs/Job'
import DateRange from 'components/DateRange'
import Skills from './Skills'
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
          <span className={styles.printInline}>
            <DateRange {...date} className={styles.dateRange} />
            <h3 aria-label="Job title">{title}</h3>
          </span>
          <Company {...company} department={department} className={styles.company} />
        </header>
        {description && description.html && (
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description.html }} />
        )}
        <Skills skills={skills} />
      </section>
    )
  }
}
