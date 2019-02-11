import * as path from 'path'
import * as fs from 'fs'
import * as React from 'react'
import { Text, Image, View, StyleSheet } from '@react-pdf/renderer'
import ResumeMetadata from 'data/ResumeMetadata'

function b64(file: string) {
  return fs.readFileSync(file).toString('base64')
}
function b64Png(file: string) {
  return 'data:image/png;base64,' + b64(path.resolve(__dirname, '../img/' + file))
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 24,
    fontFamily: 'RalewayExtraLight',
  },
  contact: {
    flexDirection: 'row',
  },
  contactInner: {
    paddingTop: 5,
    textAlign: 'right',
    alignItems: 'flex-end',
    fontSize: 9,
    lineHeight: 1.3,
    letterSpacing: 0.75,
    marginRight: 8,
  },
})

export default () => (
  <View style={styles.container} fixed>
    <View style={styles.name}>
      <Text>Aaron J. Lampros</Text>
      <Text style={{ fontSize: 12, fontFamily: 'Raleway' }}>User Experience Architect</Text>
    </View>
    <View style={styles.contact}>
      <View style={styles.contactInner}>
        <Text>{ResumeMetadata.website.hostname}</Text>
        <Text>{ResumeMetadata.location}</Text>
        <Text>{ResumeMetadata.phone}</Text>
        <Text>{ResumeMetadata.email}</Text>
        <Text>github.com/{ResumeMetadata.github}</Text>
      </View>
      <Image src={b64Png('qr-link.png')} style={{ width: '1in', height: '1in', marginTop: 4 }} />
    </View>
  </View>
)
