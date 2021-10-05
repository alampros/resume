import { createContext } from 'react'

import jobs from 'data/jobs'

export type InformationDensity = 'sparse' | 'normal' | 'dense'

const jobDates = jobs.reduce((acc, job) => {
  if(job.date.end) {
    acc.push(job.date.end)
  }
  if(job.date.start) {
    acc.push(job.date.start)
  }
  return acc
}, [] as Date[]).sort((a, b) => (b.getTime() - a.getTime()))

const earliest = jobDates[jobDates.length - 1]
const latest = jobDates[0]
const filterMin = new Date(2012, 0)
const filterMax = new Date()

export const jobDateRange = [earliest, latest]

export const defaultDateRange = [filterMin, filterMax]

export interface IDateFilterContext {
  from: Date
  to: Date
  earliest: Date
  latest: Date
  setDates: (_v: [Date, Date]) => void
}

export const DateFilterContext = createContext<IDateFilterContext>({
  from: defaultDateRange[0],
  to: defaultDateRange[1],
  earliest,
  latest,
  setDates: () => {},
})
