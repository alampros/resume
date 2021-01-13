import React, { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'

import Job from 'components/Job'
import { DateFilterContext } from 'contexts/DateFilterContext'
import JobType from 'data/Job'
import { filterDateRange } from 'data/utils'

import SectionHeader from './SectionHeader'

type TProps = {
  jobs: JobType[]
}

export const Jobs: React.FC<TProps> = (props: TProps) => {
  const { jobs } = props
  const { from, to } = useContext(DateFilterContext)
  const filteredJobs = jobs
    .filter(job => filterDateRange(job.date, { start: from, end: to }))
  const $jobs = filteredJobs
    .map(job => (
      <Job
        key={`${job.company.name} - ${job.title}`}
        job={job}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
      />
    ))
  return (
    <SectionHeader title="Professional Experience">
      <AnimatePresence>
        {$jobs}
      </AnimatePresence>
    </SectionHeader>
  )
}

export default Jobs
