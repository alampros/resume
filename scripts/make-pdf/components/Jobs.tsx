import * as React from 'react'
import Section from './Section'
import Job from './Job'
import { IJobDescriptor } from 'data/Job'

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
