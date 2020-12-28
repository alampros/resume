import * as React from 'react'

import { IJobDescriptor } from 'data/Job'

import Job from './Job'
import Section from './Section'

interface Props {
  jobs: IJobDescriptor[]
}
export default ({ jobs }: Props) => {
  const $jobs = jobs.map(job => (
    <Job key={`${job.title}-${job.company.id}`} job={job} />
  ))
  return (
    <Section title="Professional Experience" wrap>
      {$jobs}
    </Section>
  )
}
