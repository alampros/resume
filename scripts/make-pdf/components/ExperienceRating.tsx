import * as React from 'react'
import ReactPDF, {
  Text,
} from '@react-pdf/renderer'

import { ISkill } from 'data/Skill'

type Props = { labelProps?: ReactPDF.TextProps } & Pick<ISkill, 'yearsOfExperience'> & ReactPDF.TextProps

export default ({ yearsOfExperience, labelProps, ...passedProps }: Props) => {
  const plural = yearsOfExperience > 1 ? 'years' : 'year'
  const change = yearsOfExperience % 1
  const bits = (() => {
    if(!change) return ''
    if(change === 0.5) return '½'
    if(change === 0.25) return '¼'
    if(change === 0.75) return '¾'
    return change.toFixed(1).slice(1)
  })()
  const years = yearsOfExperience < 1 ? bits : Math.floor(yearsOfExperience) + bits
  return (
    <Text {...passedProps}>{years} <Text {...labelProps}>{plural}</Text></Text>
  )
}
