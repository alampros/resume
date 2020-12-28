import * as fs from 'fs'
import * as path from 'path'

import * as React from 'react'
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'

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
    fontFamily: 'OpenSansLight',
  },
  contact: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 4,
    fontSize: 8,
  },
  contactInner: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 12,
  },
})

const {
  firstName,
  middleName,
  lastName,
  title,
  website,
  location,
  phone,
  email,
  github,
} = ResumeMetadata
const middle = middleName && middleName.length === 1 ? middleName + '.' : middleName

export default () => (
  <View style={styles.container} fixed>
    <View style={styles.name}>
      <Text>{`${firstName} ${middle} ${lastName}`}</Text>
      <Text style={{ fontSize: 12 }}>{title}</Text>
    </View>
    <View style={styles.contact}>
      <View style={styles.contactInner}>
        <Text>{website.hostname}</Text>
        <Text>{location.city}, {location.state}</Text>
        <Text>{phone}</Text>
        <Text>{email}</Text>
        <Text>github.com/{github}</Text>
      </View>
      <Image src={b64Png('qr-link.png')} style={{ width: '0.75in', height: '0.75in' }} />
    </View>
  </View>
)
