import DateRange from './DateRange'

export function clampFloat(inp: number): number {
  return Math.min(1, Math.max(0, inp))
}

export function filterDateRange(entity: DateRange | undefined, filterRange: Required<DateRange>): boolean {
  if(!entity) return true
  const { start, end } = entity
  const { start: from, end: to } = filterRange
  if(start < to) {
    if(!end) return true
    if(end > from) {
      return true
    }
  }
  return false
}
