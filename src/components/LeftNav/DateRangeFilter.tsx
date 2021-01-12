import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Slider, SliderProps } from '@material-ui/core'

import { DateFilterContext, defaultDateRange } from 'contexts/DateFilterContext'

const ONEYEAR = 1000 * 60 * 60 * 24 * 365

type TProps = {
  liveUpdate?: boolean
} & SliderProps

export const DateRangeFilter = (props: TProps) => {
  const { liveUpdate, ...sliderProps } = props
  const { setDates, earliest } = useContext(DateFilterContext)
  const min = earliest.getTime()
  const max = defaultDateRange[1].getTime()
  const [tempRange, setTempRange] = useState([new Date(2015, 0).getTime(), max])

  const handleChange = (_event: React.ChangeEvent<{}>, v: number | number[]) => {
    if(!Array.isArray(v)) {
      throw new Error('Cannot handle single-value change event.')
    }
    setTempRange([v[0], v[1]])
  }

  const handleChangeCommitted = (_event: React.ChangeEvent<{}>, v: number | number[]) => {
    if(Array.isArray(v)) {
      setDates([new Date(v[0]), new Date(v[1])])
    } else {
      throw new Error('Cannot handle single-value change event.')
    }
  }

  useEffect(() => {
    if(liveUpdate) {
      setDates([new Date(tempRange[0]), new Date(tempRange[1])])
    }
  }, [liveUpdate, setDates, tempRange])

  const marks = useMemo(() => {
    return new Array(Math.ceil((max - min) / ONEYEAR))
      .fill(null)
      .map((_v, i) => {
        const y = new Date(max).getFullYear() - i
        return {
          value: new Date(y, 0).getTime(),
          label: y,
        }
      })
      .filter((_v, i) => {
        return (i - 1) % 2 === 0
      })
  }, [max, min])

  return (
    <Slider
      min={min}
      max={max}
      value={[tempRange[0], tempRange[1]]}
      onChange={handleChange}
      onChangeCommitted={handleChangeCommitted}
      valueLabelFormat={(v) => {
        return new Date(v).toDateString()
      }}
      marks={marks}
      {...sliderProps}
    />
  )
}
