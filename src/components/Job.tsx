import * as React from 'react'
import { IJobDescriptor } from 'data/jobs/Job'
const styles = require('./Job.module.css')

interface Props extends IJobDescriptor {
}

export default class Job extends React.Component<Props> {
  render() {
    const {
      title,
      company,
    } = this.props
    return (
      <div className={styles.root}>
        <div><strong>{title}</strong></div>
        <div>{company.name}</div>
      </div>
    )
  }
}
