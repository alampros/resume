import React from 'react'

import Job from 'components/Job'
import JobType from 'data/Job'

type TProps = {
  jobs: JobType[]
}

export const Jobs: React.FC<TProps> = (props: TProps) => {
  const { jobs } = props
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

export default Jobs
