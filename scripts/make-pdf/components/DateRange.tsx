import * as React from 'react'
import ReactPDF, {
  Text,
  View,
} from '@react-pdf/renderer'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

interface ITimeProps {
  date: Date
}
const Time = ({ date }: ITimeProps) => (
  <Text>{dateFormatter.format(date)}</Text>
)

interface Props {
  start: Date
  end?: Date
  as?: string
}

export default (props: Props & ReactPDF.ViewProps) => {
  const {
    start,
    end,
    style,
    ...passedProps
  } = props
  const $start = (
    <Time date={start} />
  )
  const $end = end
    ? <Time date={end} />
    : <Text>Present</Text>
  return (
    <View style={{ flexDirection: 'row', ...style }} {...passedProps}>
      {$start}<Text style={{ paddingHorizontal: 4 }}>—</Text>{$end}
    </View>
  )
}
