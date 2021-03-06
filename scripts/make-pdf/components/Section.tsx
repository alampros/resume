import * as React from 'react'
import ReactPDF, {
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

import sharedStyles from '../sharedStyles'

const styles = StyleSheet.create({
  indent: {
  },
})

interface Props {
  title?: string
  children: React.ReactNode
}
export default ({ title, children, ...passedProps }: Props & ReactPDF.ViewProps) => {
  return (
    <View wrap={false} {...passedProps}>
      {title && <Text style={sharedStyles.headings.section}>{title}</Text>}
      <View style={styles.indent}>
        {children}
      </View>
    </View>
  )
}
