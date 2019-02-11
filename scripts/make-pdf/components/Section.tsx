import * as React from 'react'
import ReactPDF, {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import sharedStyles from '../sharedStyles'

const styles = StyleSheet.create({
  indent: {
    paddingHorizontal: 18,
    maxWidth: '95%',
  },
})

interface Props {
  title: string
  children: React.ReactNode
}
export default ({ title, children, ...passedProps }: Props & ReactPDF.ViewProps) => {
  return (
    <View {...passedProps}>
      <Text style={sharedStyles.headings.section}>{title}</Text>
      <View style={styles.indent}>
        {children}
      </View>
    </View>
  )
}
