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
  as?: string
}

export default class DateRange extends React.Component<any & Props> {
  static defaultProps = {
    as: 'span',
  }

  render() {
    const {
      start,
      end,
      as,
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
    const labelStart = dateFormatter.format(start)
    const labelEnd = end ? dateFormatter.format(end) : 'present'
    const Component = as || 'span'
    return (
      <Component
        aria-label={`${labelStart} through ${labelEnd}`}
        {...passedProps}
      >
        {$start} - {$end}
      </Component>
    )
  }
}
