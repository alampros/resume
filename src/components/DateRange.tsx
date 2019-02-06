import React from 'react'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

interface ITimeProps {
  date: Date
}
const Time: React.SFC<ITimeProps> = ({ date }: ITimeProps) => (
  <time dateTime={date.toJSON()}>{dateFormatter.format(date)}</time>
)

interface Props {
  start: Date
  end?: Date
}

export default class DateRange extends React.Component<React.HTMLAttributes<HTMLSpanElement> & Props> {
  render() {
    const {
      start,
      end,
      ...passedProps
    } = this.props
    const $start = (
      <Time date={start} />
    )
    const $end = end ? (
      <Time date={end} />
    ) : (
      <time>Present</time>
    )
    return (
      <span {...passedProps}>
        {$start} - {$end}
      </span>
    )
  }
}
