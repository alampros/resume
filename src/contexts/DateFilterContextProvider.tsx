import React, { PropsWithChildren, useCallback, useState } from 'react'

import { DateFilterContext, defaultDateRange, jobDateRange } from 'contexts/DateFilterContext'

type TProps = PropsWithChildren<{
}>
export const DateFilterContextProvider = ({ children }: TProps) => {
  const [fromDate, setFromDate] = useState(jobDateRange[0])
  const [toDate, setToDate] = useState(defaultDateRange[1])
  const setDates = useCallback(([newFromDate, newToDate]: [Date, Date]) => {
    // guard against setting a filter that would yield no jobs
    if(newFromDate < jobDateRange[1]) {
      setFromDate(newFromDate)
    }
    if(newToDate > jobDateRange[0]) {
      setToDate(newToDate)
    }
  }, [])
  return (
    <DateFilterContext.Provider value={{
      from: fromDate,
      to: toDate,
      earliest: jobDateRange[0],
      latest: jobDateRange[1],
      setDates,
    }}
    >
      {children}
    </DateFilterContext.Provider>
  )
}
