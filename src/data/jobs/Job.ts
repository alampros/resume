interface IDateRange {
  start: Date
  end?: Date
}

export interface IJobDescriptor {
  title: string
  company: string
  date: IDateRange
  description?: string
}

export interface IJobConstructorParam extends IJobDescriptor {
  descriptionId?: string
}

export default class Job implements IJobDescriptor {
  constructor(jobDescriptor: IJobConstructorParam) {
    Object.assign(this, jobDescriptor)
  }
  title: string
  company: string
  date: IDateRange
}
