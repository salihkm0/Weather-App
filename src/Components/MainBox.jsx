import { Box } from '@mui/material'
import React from 'react'
import { MainBoxStyle } from '../ui/MainBoxStyle'
import LeftsideBox from './LeftsideBox'

export default function MainBox() {
  return (
    <>
        <Box
          sx={MainBoxStyle}
        ><LeftsideBox></LeftsideBox></Box>
    </>
  )
}

