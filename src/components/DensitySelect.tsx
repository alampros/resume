import React from 'react'
import { InformationDensity } from 'contexts/InformationDensity'
import { SegmentedControl } from 'evergreen-ui'

const initialState = {
  options: [
    { label: 'Sparse', value: 'sparse' },
    { label: 'Normal', value: 'normal' },
    { label: 'Dense', value: 'dense' },
  ],
}

interface Props {
  density: InformationDensity
  onDensityChange(density: InformationDensity): void
}

export default function DensitySelect({ density, onDensityChange }: Props): JSX.Element {
  return (
    <SegmentedControl
      name="density"
      height={24}
      options={initialState.options}
      value={density}
      onChange={onDensityChange}
    />
  )
}
