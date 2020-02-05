import * as React from 'react'

import Job from 'components/Job'
import JobType from 'data/Job'

interface Props {
  jobs: JobType[]
}

export default class Jobs extends React.Component<Props> {
  render() {
    const { jobs } = this.props
    const $jobs = jobs.map(job => (
      <Job key={`${job.company.name} - ${job.title}`} {...job} />
    ))
    return (
      <section>
        <h2>Professional Experience</h2>
        <hr aria-hidden />
        {$jobs}
      </section>
    )
  }
}
