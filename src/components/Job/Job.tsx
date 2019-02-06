import * as React from 'react'
import Company from './Company'
import { IJobDescriptor } from 'data/jobs/Job'
import DateRange from 'components/DateRange'
const styles = require('./Job.module.css')

interface Props extends IJobDescriptor {
}

export default class Job extends React.Component<Props> {
  render() {
    const {
      title,
      company,
      description,
      date,
    } = this.props
    return (
      <section className={styles.root}>
        <header>
          <DateRange {...date} className={styles.dateRange} />
          <h3>{title}</h3>
          <Company {...company} className={styles.company} />
        </header>
        {description && description.html && (
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description.html }} />
        )}
      </section>
    )
  }
}
