import React, { useContext } from 'react'
import { Slider, SliderProps } from '@material-ui/core'

import { InformationDensity, InformationDensityContext } from 'contexts/InformationDensityContext'

type TSliderMark = {
  label: string
  value: number
  density: InformationDensity
}
const marks: Array<TSliderMark> = [
  { label: 'Sparse', value: 10, density: 'sparse' },
  { label: 'Normal', value: 20, density: 'normal' },
  { label: 'Dense', value: 30, density: 'dense' },
]

export const DensitySelect: React.FC<SliderProps> = (props: SliderProps) => {
  const { density, setDensity } = useContext(InformationDensityContext)
  return (
    <Slider
      defaultValue={20}
      onChangeCommitted={(_e, val) => {
        const d = marks.find(m => m.value === val)
        if(d) {
          setDensity(d.density)
        }
      }}
      value={marks.find(m => m.density === density)?.value || 10}
      getAriaValueText={(val) => {
        return marks.find(m => m.value === val)?.label || '?'
      }}
      step={10}
      valueLabelDisplay="off"
      marks={marks}
      min={10}
      max={30}
      {...props}
    />
  )
}
export default DensitySelect
