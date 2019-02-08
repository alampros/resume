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

export default class DateRange extends React.Component<React.HTMLAttributes<HTMLSpanElement> & Props> {
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
    const Component = as || 'span'
    return (
      <Component {...passedProps}>
        {$start} - {$end}
      </Component>
    )
  }
}
