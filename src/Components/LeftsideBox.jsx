import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  InnerBox,
  LeftsideBoxStyle,
  LeftsideInnerBoxStyle,
  SideInnerBoxStyle,
} from "../ui/LeftsideBoxStyle";
import BackgroundVedio from "./BackgroundVedio";
import { UilTemperatureHalf,UilTear } from '@iconscout/react-unicons'


export default function LeftsideBox() {
  return (
    <>
    
      <Box sx={LeftsideBoxStyle}>
        {/* <BackgroundVedio /> */}
        <Stack direction={"column"}>
          <Box sx={InnerBox}>
            <Typography variant="h1" fontSize={65} marginTop={7} marginLeft={2}>28°</Typography>
            <Typography variant="h5">Cloudy Day</Typography>
            <Typography variant="p" fontSize={14}>
               Today, expect a rainy day with temperratures reaching a maximum of 28°C.
            </Typography>
          </Box>
          <Stack direction={"row"}>
            <Box sx={SideInnerBoxStyle}>
            <Typography variant="h1" fontSize={13} marginTop={1} ><UilTemperatureHalf/>  FEELS LIKE</Typography>
            <Typography variant="h1" fontSize={28} marginLeft={1}>30°</Typography>
            <Typography variant="p" fontSize={9} marginLeft={1}>Humidity is making it feel warmer</Typography>
            </Box>
            <Box sx={SideInnerBoxStyle}>
            <Typography variant="h1" fontSize={11} marginTop={.5} ><UilTear/> PRECIPITATION </Typography>
            <Typography variant="h1" fontSize={28} marginLeft={1}>2.3''</Typography>
            <Typography variant="p" fontSize={14} marginLeft={1} marginTop={.2}>in last 24h</Typography>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box sx={SideInnerBoxStyle}>
            <Typography variant="h1" fontSize={11} marginTop={.5} ><UilTear/> VISIBILITY</Typography>
            <Typography variant="h1" fontSize={28} marginLeft={1} marginTop={1}>6 mi</Typography>
            </Box>
            <Box sx={SideInnerBoxStyle}>
            <Typography variant="h1" fontSize={11} marginTop={.5} ><UilTear/> HUMIDITY</Typography>
            <Typography variant="h1" fontSize={28} marginLeft={1} marginTop={1} >82%</Typography>
            <Typography variant="p" fontSize={9} marginLeft={1}>The dew point is 25° right now</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
