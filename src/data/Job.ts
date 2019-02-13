import { Omit } from 'utility-types'
import companies from 'data/companies'
import { ICompany } from 'data/Company'
import { IProject } from 'data/Project'
import { IJobSkill } from 'data/Skill'

interface IDateRange {
  start: Date
  end?: Date
}

export interface IJobDescriptor {
  title: string
  date: IDateRange
  company: ICompany
  department?: string
  description?: string
  projects: IProject[]
  skills: IJobSkill[]
}

export interface IJobConstructorParam extends Omit<IJobDescriptor, 'description' | 'company' | 'skills' | 'projects'> {
  description?: string
  companyId: string
  skills?: IJobSkill[]
  projects?: IProject[]
}

export default class Job implements IJobDescriptor {
  constructor(jobDescriptor: IJobConstructorParam) {
    const {
      title,
      date,
      companyId,
      description,
      skills,
      department,
      projects,
    } = jobDescriptor
    this.title = title
    this.date = date
    this.description = description
    const company = companies.find(co => co.id === companyId)
    if(!company) {
      throw new Error(`No company found for id "${companyId}"`)
    }
    this.company = company
    this.department = department
    this.skills = skills || []
    this.projects = projects || []
  }
  title: string
  company: ICompany
  department?: string
  date: IDateRange
  description?: string
  projects: IProject[]
  skills: IJobSkill[]
}
