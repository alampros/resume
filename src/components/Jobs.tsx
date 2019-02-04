import * as React from 'react'
import JobType from 'data/jobs/Job'
import Job from 'components/Job'

interface Props {
  jobs: JobType[]
}

export default class Jobs extends React.Component<Props> {
  render() {
    const { jobs } = this.props
    const $jobs = jobs.map(job => (
      <Job key={job.title} {...job} />
    ))
    return (
      <div>
        <h2>Professional Experience</h2>
        {$jobs}
      </div>
    )
  }
}
