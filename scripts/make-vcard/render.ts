import * as path from 'path'
import vCardJS from 'vcards-js'
import ResumeMetadata from 'data/ResumeMetadata'

const staticDir = path.resolve(__dirname, '../../static')
const fileName = 'Aaron Lampros.vcf'
const defaultPath = path.join(staticDir, fileName)

export default (filePath: string = defaultPath) => {
  const {
    firstName,
    middleName,
    lastName,
    title,
    website,
    phone,
    email,
  } = ResumeMetadata
  const card = vCardJS()
  card.firstName = firstName
  card.middleName = middleName
  card.lastName = lastName

  card.title = title
  card.url = website.toString()
  card.cellPhone = phone
  card.email = email

  card.socialUrls['linkedIn'] = 'https://www.linkedin.com/in/aaron-lampros/'

  card.version = '3.0'
  card.source = `https://alampros.com/${fileName}`

  card.photo.embedFromFile(path.join(staticDir, 'aaron-sm.jpg'))

  card.saveToFile(filePath)
}
