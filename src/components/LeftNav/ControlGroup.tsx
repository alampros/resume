import React, { ReactNode } from 'react'
import { Box, BoxProps, Typography, TypographyProps } from '@material-ui/core'

type TProps = {
  labelProps?: Partial<TypographyProps>
  label: ReactNode,
} & BoxProps
export const ControlGroup: React.FC<TProps> = (props: TProps) => {
  const {
    labelProps,
    label,
    children,
    ...rest
  } = props
  return (
    <Box display="flex" flexDirection="column" my={4} {...rest}>
      <Typography id="label-density-select" gutterBottom {...labelProps}>
        {label}
      </Typography>
      <Box pl={2}>
        {children}
      </Box>
    </Box>
  )
}
