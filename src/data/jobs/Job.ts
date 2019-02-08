import { Omit } from 'utility-types'
import companies from 'data/companies'
import { ICompany } from 'data/companies/Company'
import { IJobSkill } from 'data/Skill'
import { IMarkdownNode } from 'data/GatsbyTypes'

interface IDateRange {
  start: Date
  end?: Date
}

export interface IJobDescriptor {
  title: string
  date: IDateRange
  company: ICompany
  department?: string
  description?: IMarkdownNode
  skills: IJobSkill[]
}

export interface IJobConstructorParam extends Omit<IJobDescriptor, 'description' | 'company' | 'skills'> {
  descriptionId?: string
  companyId: string
  skills?: IJobSkill[]
}

export default class Job implements IJobDescriptor {
  constructor(jobDescriptor: IJobConstructorParam, getJobDescription?: (descriptionId: string) => IMarkdownNode | void) {
    const {
      title,
      date,
      companyId,
      descriptionId,
      skills,
      department,
    } = jobDescriptor
    this.title = title
    this.date = date
    if(descriptionId && getJobDescription) {
      const desc = getJobDescription(descriptionId)
      if(desc) {
        this.description = desc
      }
    }
    const company = companies.find(co => co.id === companyId)
    if(!company) {
      throw new Error(`No company found for id "${companyId}"`)
    }
    this.company = company
    this.department = department
    this.skills = skills || []
  }
  title: string
  company: ICompany
  department?: string
  date: IDateRange
  description?: IMarkdownNode
  skills: IJobSkill[]
}
