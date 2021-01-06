import React, { useMemo } from 'react'
import clsx from 'clsx'
import {
  LabelFormatter,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadarChartProps,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import { IProject } from 'data/Project'

import styles from './ProjectSkillsetsVis.module.css'

type TProps = {
  project: IProject
} & RadarChartProps

interface IStringMap { [key: string]: string }

const labelMap: IStringMap = {
  design: 'DES',
  development: 'DEV',
  organization: 'ORG',
  communication: 'COM',
  leadership: 'LEAD',
}
const labelMapInverted: IStringMap = Object.entries(labelMap).reduce((acc: IStringMap, [k, v]) => {
  acc[v] = k
  return acc
}, {})

const ratingNumberFormatter = new Intl.NumberFormat(undefined, {
  style: 'percent',
})

function ratingFormatter(value: any): string[] {
  return [ratingNumberFormatter.format(value), 'Weight']
}

function labelFormatter(label: string): React.ReactNode {
  let l = labelMapInverted[label] || label
  l = l.charAt(0).toUpperCase() + l.slice(1)
  return l
}

export const ProjectSkillsetsVis: React.FC<TProps> = (props: TProps) => {
  const {
    project,
    className,
    ...passedProps
  } = props
  const {
    skillsetRatings,
  } = project

  const data = useMemo(() => {
    if(!skillsetRatings) {
      return
    }
    return Object.entries(skillsetRatings).map(([skillset, rating]) => {
      return {
        skillset,
        label: labelMap[skillset] || skillset,
        rating,
      }
    })
  }, [skillsetRatings])

  if(!data?.length) {
    return null
  }
  return (
    <ResponsiveContainer
      height={125}
      width="100%"
      className={clsx(className, styles.root)}
    >
      <RadarChart
        cx="50%"
        cy="55%"
        outerRadius={50}
        data={data}
        {...passedProps}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="label" />
        <Tooltip
          formatter={ratingFormatter}
          labelFormatter={labelFormatter as LabelFormatter}
        />
        <Radar dataKey="rating" className="project-polygon" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
export default ProjectSkillsetsVis
