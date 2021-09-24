import React, { useContext } from 'react'
import { Box, Slider, SliderProps, Typography, useTheme } from '@material-ui/core'

import { SkillsRelevanceContext, TSkillsRelevanceCategory } from 'contexts/SkillsRelevanceContext'

type TProps = {
  liveUpdate?: boolean
} & SliderProps

export const SkillsRelevanceFilter = (_props: TProps) => {
  const {
    code,
    ux,
    systems,
    setRelevance,
  } = useContext(SkillsRelevanceContext)
  const getHandler = (category: TSkillsRelevanceCategory) => (val: number) => setRelevance(category, val)
  return (
    <>
      <LabeledFilter category="code" value={code} onChange={getHandler('code')} />
      <LabeledFilter category="ux" value={ux} onChange={getHandler('ux')} />
      <LabeledFilter category="systems" value={systems} onChange={getHandler('systems')} />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- getting a weird false-positive for the key here
type TLabelMap = { [k in TSkillsRelevanceCategory]: string }
const labelMap: TLabelMap = {
  ux: 'UX',
  code: 'Code',
  systems: 'Systems',
}

type TLabeledFilterProps = {
  category: TSkillsRelevanceCategory
  onChange: (_v: number) => void
} & Omit<SliderProps, 'onChange'>

const LabeledFilter = ({ category, onChange, ...passedProps }: TLabeledFilterProps) => {
  const theme = useTheme()
  const handleChange = (_e: React.ChangeEvent<{}>, val: number | number[]) => {
    if(Array.isArray(val)) throw new Error('Bad handler')
    onChange(val)
  }
  return (
    <Box
      display="flex"
      flexDirection="row"
    >
      <Typography
        id={`label-skills-relevance-filter-${category}`}
        align="right"
        variant="caption"
        style={{ flexBasis: '7em', marginRight: theme.spacing(1) }}
      >
        {labelMap[category]}
      </Typography>
      <Slider
        min={0}
        max={1}
        step={0.1}
        aria-labelledby={`label-skills-relevance-filter-${category}`}
        onChange={handleChange}
        {...passedProps}
      />
    </Box>
  )
}
