import React from 'react'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

interface ITimeProps {
  date: Date
}
const Time: React.FC<ITimeProps> = ({ date }: ITimeProps) => (
  <time dateTime={date.toJSON()}>{dateFormatter.format(date)}</time>
)

type TProps = {
  start: Date
  end?: Date
} & Omit<React.HTMLProps<HTMLSpanElement>, 'start'>

export const DateRange: React.FC<TProps> = (props: TProps) => {
  const {
    start,
    end,
    ...passedProps
  } = props
  const $start = (
    <Time date={start} />
  )
  const $end = end
    ? (
      <Time date={end} />
    )
    : (
      <time>Present</time>
    )
  const labelStart = dateFormatter.format(start)
  const labelEnd = end ? dateFormatter.format(end) : 'present'
  return (
    <span
      aria-label={`${labelStart} through ${labelEnd}`}
      {...passedProps}
    >
      {$start} - {$end}
    </span>
  )
}

export default DateRange
