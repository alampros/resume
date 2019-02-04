import * as React from 'react'
import { IJobDescriptor } from 'data/jobs/Job'

interface Props extends IJobDescriptor {
}

export default class Job extends React.Component<Props> {
  render() {
    const {
      title,
      company,
    } = this.props
    return (
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <div>{title}</div>
        <div>{company}</div>
      </div>
    )
  }
}
