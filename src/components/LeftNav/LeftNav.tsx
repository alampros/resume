import React from 'react'
import { Box, GridProps } from '@material-ui/core'
import clsx from 'clsx'

import DensitySelect from '../DensitySelect'
import ToggleDarkMode from '../ToggleDarkMode'

import { ControlGroup } from './ControlGroup'
import { DateRangeFilter } from './DateRangeFilter'
import { SkillsRelevanceFilter } from './SkillsRelevanceFilter'

type TProps = {
  showSkillsRelevanceFilter?: boolean
  showInformationDensityFilter?: boolean
  showDateRangeFilter?: boolean
} & GridProps
export const LeftNav = (props: TProps) => {
  const {
    showSkillsRelevanceFilter = Boolean(process.env.GATSBY_RESUME_ENABLE_FILTER_SKILLSRELEVANCE),
    showInformationDensityFilter = true,
    showDateRangeFilter = true,
    className,
    ...passedProps
  } = props
  return (
    <Box
      className={clsx(className, 'no-print')}
      direction="column"
      alignItems="stretch"
      px={3}
      {...passedProps}
    >
      <ControlGroup label="Theme:" labelProps={{ id: 'label-theme-toggle' }}>
        <ToggleDarkMode id="toggle-dark-mode" aria-labelledby="label-theme-toggle" />
      </ControlGroup>
      {showInformationDensityFilter && (
        <ControlGroup label="Information Density:" labelProps={{ id: 'label-density-select' }}>
          <Box px={2}>
            <DensitySelect aria-labelledby="label-density-select" style={{ width: '100%' }} />
          </Box>
        </ControlGroup>
      )}
      {showDateRangeFilter && (
        <ControlGroup label="Date Range:" labelProps={{ id: 'label-date-range' }}>
          <DateRangeFilter aria-labelledby="label-date-range" liveUpdate />
        </ControlGroup>
      )}
      {showSkillsRelevanceFilter && (
        <ControlGroup label="Skills Relevance:" labelProps={{ id: 'label-skills-relevance' }}>
          <SkillsRelevanceFilter aria-labelledby="label-skills-relevance" />
        </ControlGroup>
      )}
    </Box>
  )
}
