import { Omit } from 'utility-types'

import companies from 'data/companies'
import { ICompany } from 'data/Company'
import DateRange, { IDateRange } from 'data/DateRange'
import Project, { IProject } from 'data/Project'
import { IJobSkill } from 'data/Skill'

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
    this.date = new DateRange(date)
    this.description = description
    const company = companies.find(co => co.id === companyId)
    if(!company) {
      throw new Error(`No company found for id "${companyId}"`)
    }
    this.company = company
    this.department = department
    this.skills = skills || []
    this.projects = (() => {
      if(!projects) return []
      return projects.map(project => {
        if(!project.date) {
          project.date = this.date
        }
        return new Project(project)
      })
    })()
  }

  title: string
  company: ICompany
  department?: string
  date: IDateRange
  description?: string
  projects: IProject[]
  skills: IJobSkill[]
}
