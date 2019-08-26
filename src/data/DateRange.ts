export interface IDateRange {
  start: Date
  end?: Date
}

export default class DateRange implements IDateRange {
  constructor(param: IDateRange) {
    const {
      start,
      end,
    } = param
    this.start = start
    if(end) this.end = end
  }

  start: Date
  end?: Date
}
