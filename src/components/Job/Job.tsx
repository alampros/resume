import * as React from 'react'
import Company from './Company'
import { IJobDescriptor } from 'data/jobs/Job'
const styles = require('./Job.module.css')

interface Props extends IJobDescriptor {
}

export default class Job extends React.Component<Props> {
  render() {
    const {
      title,
      company,
      description,
    } = this.props
    return (
      <section className={styles.root}>
        <header>
          <div><strong>{title}</strong></div>
          <Company {...company} className={styles.company} />
        </header>
        {description && description.html && (
          <div dangerouslySetInnerHTML={{ __html: description.html }} />
        )}
      </section>
    )
  }
}
