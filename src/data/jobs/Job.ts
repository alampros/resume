import companies from 'data/companies'
import { ICompany } from 'data/companies/Company'
import { IMarkdownNode } from 'data/GatsbyTypes'

interface IDateRange {
  start: Date
  end?: Date
}

export interface IJobDescriptor {
  title: string
  date: IDateRange
  company: ICompany
  description?: IMarkdownNode
}

export interface IJobConstructorParam {
  title: string
  date: IDateRange
  descriptionId?: string
  companyId: string
}

export default class Job implements IJobDescriptor {
  constructor(jobDescriptor: IJobConstructorParam, getJobDescription?: (descriptionId: string) => IMarkdownNode) {
    const {
      title,
      date,
      companyId,
      descriptionId,
    } = jobDescriptor
    this.title = title
    this.date = date
    this.company = companies.find(co => co.id === companyId)
    if(descriptionId && getJobDescription) {
      const desc = getJobDescription(descriptionId)
      if(desc) {
        this.description = desc
      }
    }
    if(!this.company) {
      throw new Error(`No company found for id "${companyId}"`)
    }
  }
  title: string
  company: ICompany
  date: IDateRange
  description?: IMarkdownNode
}
