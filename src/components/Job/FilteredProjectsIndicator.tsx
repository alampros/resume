import React from 'react'
import { motion, MotionProps } from 'framer-motion'

type TProps = {
  numberFiltered: number
} & MotionProps

export const FilteredProjectsIndicator = ({ numberFiltered, ...motionProps }: TProps) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0 }}
      {...motionProps}
    >
      Show {numberFiltered} hidden projects
    </motion.div>
  )
}
