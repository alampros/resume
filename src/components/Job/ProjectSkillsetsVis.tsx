import React from 'react'
import cx from 'classnames'
import { IProject } from 'data/Project'
import {
  Radar,
  RadarChart,
  RadarChartProps,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  LabelFormatter,
  ResponsiveContainer,
} from 'recharts'
const styles = require('./ProjectSkillsetsVis.module.css')

interface Props {
  project: IProject
}

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

export default class ProjectSkillsetsVis extends React.PureComponent<Props & RadarChartProps> {
  render() {
    const {
      project,
      className,
      ...passedProps
    } = this.props
    const {
      skillsetRatings,
    } = project
    if(!skillsetRatings) {
      return null
    }

    const data = Object.entries(skillsetRatings).map(([skillset, rating]) => {
      return {
        skillset,
        label: labelMap[skillset] || skillset,
        rating,
      }
    })
    if(!data.length) {
      return null
    }
    return (
      <ResponsiveContainer height={125} width="100%">
        <RadarChart
          className={cx(className, styles.root)}
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
}
