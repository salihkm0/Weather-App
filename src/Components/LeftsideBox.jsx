import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  InnerBox,
  InnerBox2,
  LeftsideBoxStyle,
  SideInnerBoxStyle,
} from "../ui/LeftsideBoxStyle";
import {
  UilTemperatureHalf,
  UilEye,
  UilRaindropsAlt,
  UilCloudWind,
} from "@iconscout/react-unicons";

export default function LeftsideBox() {
  return (
    <>
      <Box sx={LeftsideBoxStyle}>
        {/* <BackgroundVedio /> */}
        <Stack direction={"column"}>
          <Box sx={InnerBox}>
            <Typography variant="h1" fontSize={65} marginTop={7} marginLeft={2}>
              28°
            </Typography>
            <Typography variant="h5">Cloudy Day</Typography>
            <Typography variant="p" fontSize={14}>
              Today, expect a rainy day with temperratures reaching a maximum of
              28°C.
            </Typography>
          </Box>
          <Box sx={InnerBox2}>
            <Stack direction={"row"}>
              <Box sx={SideInnerBoxStyle}>
                <Stack direction={"row"}>
                  <Typography
                    marginLeft={1}
                    sx={{ display: "inline-block" }}
                    marginTop={1.5}
                  >
                    <UilTemperatureHalf size={17} />
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize={13}
                    marginTop={1.9}
                    marginLeft={0.5}
                  >
                    {" "}
                    FEELS LIKE
                  </Typography>
                </Stack>
                <Typography variant="h1" fontSize={25} marginLeft={1}>
                  30°
                </Typography>
                <Typography variant="p" fontSize={9} marginLeft={1}>
                  Humidity is making it feel warmer
                </Typography>
              </Box>
              <Box sx={SideInnerBoxStyle}>
                <Stack direction={"row"}>
                  <Typography
                    marginLeft={1}
                    sx={{ display: "inline-block" }}
                    marginTop={1.5}
                  >
                    <UilCloudWind size={17} />
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize={13}
                    marginTop={1.9}
                    marginLeft={0.5}
                  >
                    {" "}
                    PRESSURE
                  </Typography>
                </Stack>
                <Typography
                  variant="h1"
                  fontSize={20}
                  marginLeft={1}
                  marginTop={.2}
                >
                1017 hpa
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"row"}>
              <Box sx={SideInnerBoxStyle}>
                <Stack direction={"row"}>
                  <Typography
                    marginLeft={1}
                    sx={{ display: "inline-block" }}
                    marginTop={1.5}
                  >
                    <UilEye size={17} />
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize={13}
                    marginTop={2}
                    marginLeft={0.5}
                  >
                    VISIBILITY
                  </Typography>
                </Stack>
                <Typography
                  variant="h1"
                  fontSize={25}
                  marginLeft={1}
                  marginTop={0.7}
                >
                  6 mi
                </Typography>
              </Box>
              <Box sx={SideInnerBoxStyle}>
                <Stack direction={"row"}>
                  <Typography
                    marginLeft={1}
                    sx={{ display: "inline-block" }}
                    marginTop={1.5}
                  >
                    <UilRaindropsAlt size={17} />
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize={13}
                    marginTop={2}
                    marginLeft={0.5}
                  >
                    {" "}
                    HUMIDITY
                  </Typography>
                </Stack>
                <Typography
                  variant="h1"
                  fontSize={25}
                  marginLeft={1}
                  marginTop={0.5}
                >
                  82%
                </Typography>
                <Typography
                  variant="p"
                  fontSize={9}
                  marginLeft={1}
                  marginBottom={0.3}
                >
                  The dew point is 25° right now
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
