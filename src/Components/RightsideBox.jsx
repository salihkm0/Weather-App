import React from "react";
import { RightsideBoxStyle } from "../ui/RightsideBoxStyle";
import {
  ForcastBoxStyle,
  ForcastInnerBoxStyle,
  ForcastSubBoxStyle,
  UVindexStyle,
  FBhourly,
  styledHr,
  forcastHead,
  FBhead,
  ForcastBoxStyle10,
  ForcastSubBoxStyle10,
} from "../ui/ForcastBoxStyle";
import { Box, Grid, Stack, Typography,Span } from "@mui/material";
import { UilClockThree,UilCalender,UilCloudShowersHeavy,UilSnowFlake,UilCloudSun,UilThunderstorm,UilClouds,UilCloudSunHail,UilCloudShowersAlt } from '@iconscout/react-unicons'

export default function RightsideBox() {
  return (
    <>
      <Box sx={RightsideBoxStyle}>
        <Stack direction={"column"}>
          <Box>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                      <Box sx={ForcastBoxStyle}>1</Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={ForcastBoxStyle}>2</Box>
                    </Grid> */}

              <Grid item xs={12}>
                <Box sx={ForcastBoxStyle}>
                  <Stack direction={"column"}>
                    <Box sx={FBhead}>
                      <Stack direction={'row'}>
                      <Typography marginLeft={2}  sx={{display:"inline-block"}}><UilClockThree size={17} /></Typography>
                      <Typography variant="h1" fontSize={15} marginBottom={1} marginLeft={0.5}>HOURLY FORECAST</Typography>
                      </Stack>
                      </Box>
                    <hr style={styledHr} />
                    <Box sx={ForcastSubBoxStyle}>
                      <Stack direction="row" spacing={""}>
                        <Box sx={ForcastInnerBoxStyle}>
                          <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilCloudShowersHeavy />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilSnowFlake />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilCloudSun />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilThunderstorm />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilClouds />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilCloudSunHail />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography marginTop={2}fontSize={11} variant="h1">Now</Typography>
                          <Typography marginTop={1} marginLeft={1} fontSize={26} variant="h2">28°</Typography>
                          <UilCloudShowersAlt />
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={ForcastBoxStyle10}>
                  <Stack direction={"column"}>
                  <Box sx={FBhead}>
                      <Stack direction={'row'}>
                      <Typography marginLeft={2} marginTop={1} sx={{display:"inline-block"}}><UilCalender size={17} /></Typography>
                      <Typography variant="h1" fontSize={15} marginBottom={1} marginTop={1} marginLeft={0.5}>10 DAY FORECAST</Typography>
                      </Stack>
                  </Box>
                    <hr style={styledHr} />
                    <Box sx={ForcastSubBoxStyle10}>
                      <Stack direction="row" spacing={""}>
                        <Box sx={ForcastInnerBoxStyle}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilCloudShowersHeavy />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilSnowFlake />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilCloudSun />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilThunderstorm />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilClouds />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilCloudSunHail />
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                        <Typography variant="h1" fontSize={11} marginTop={2}>Today</Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>16/09</Typography>
                          <Typography variant="h1" marginTop={1} marginLeft={1} fontSize={26} >28°</Typography>
                          <UilCloudShowersAlt />
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Box sx={UVindexStyle}>
                    3
                  </Box>
                  <Box sx={UVindexStyle}>
                    4
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
