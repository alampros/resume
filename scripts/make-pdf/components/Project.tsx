import * as React from 'react'
import ReactPDF, {
  Text,
  View,
} from '@react-pdf/renderer'
import { IProject } from 'data/Project'

const styles = {
  container: {
    flexDirection: 'row',
    display: 'flex',
  },
  bullet: {
    marginRight: 4,
  },
}
interface Props {
  project: IProject
}

export default ({ project, style, ...passedProps }: Props & ReactPDF.ViewProps) => {
  const {
    description,
  } = project
  return (
    <View style={{ ...style, ...styles.container }} {...passedProps}>
      <Text style={styles.bullet}>•</Text>
      <Text>{description}</Text>
    </View>
  )
}
