import * as fs from 'fs'
import * as path from 'path'
import * as glob from 'globby'
import { IMarkdownNode } from 'data/GatsbyTypes'
import { getJobsWithDescriptions } from 'data/jobs/index'

const Remark = require('remark')
const strip = require('strip-markdown')

const descriptions = glob.sync(path.resolve(__dirname, '../../src/data/jobs') + '/desc/*.md')

const remark = Remark()
  .use(strip)

function getJobDescription(descriptionId?: string): IMarkdownNode | void {
  if(!descriptionId) {
    return
  }
  const filePath = descriptions.find(fp => {
    return fp.endsWith(descriptionId)
  })
  if(!filePath) {
    return
  }
  const mdString = fs.readFileSync(filePath, 'utf8')
  const processed = remark.processSync(mdString)
  const str = String(processed)
  return {
    html: str,
    rawMarkdownBody: mdString,
    fileAbsolutePath: filePath,
  }
}

export default function getJobs() {
  return getJobsWithDescriptions(getJobDescription)
}
