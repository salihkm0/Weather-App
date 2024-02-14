import React from "react";
import { RightsideBoxStyle } from "../ui/RightsideBoxStyle";
import {
  ForcastBoxStyle,
  ForcastSubBoxStyle,
  UVindexStyle,
  styledHr,
  FBhead,
  ForcastBoxStyle10,
  ForcastSubBoxStyle10,
  FIBHRFIRST,
  FIB10DFIRST,
  ForcastInnerBox10D,
  ForcastInnerBoxHrly,
  SSLFstyle,
  SSRGstyle,
  AirQualityStyle,
  AirBox,
} from "../ui/ForcastBoxStyle";
import { Box, Grid, Stack, Typography,} from "@mui/material";
import {
  UilClockThree,
  UilCalender,
  UilCloudShowersHeavy,
  UilSnowFlake,
  UilCloudSun,
  UilThunderstorm,
  UilClouds,
  UilCloudSunHail,
  UilCloudShowersAlt,
  UilMountainsSun,
  UilSun,
  UilMoon,
  UilWind,
} from "@iconscout/react-unicons";
// import { SideInnerBoxStyle } from "../ui/LeftsideBoxStyle";

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
                      <Stack direction={"row"}>
                        <Typography
                          marginLeft={2}
                          sx={{ display: "inline-block" }}
                        >
                          <UilClockThree size={17} />
                        </Typography>
                        <Typography
                          variant="h1"
                          fontSize={15}
                          marginBottom={1}
                          marginLeft={0.5}
                        >
                          HOURLY FORECAST
                        </Typography>
                      </Stack>
                    </Box>
                    <hr style={styledHr} />
                    <Box sx={ForcastSubBoxStyle}>
                      <Stack direction="row" spacing={""}>
                        <Box sx={FIBHRFIRST}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
                          <UilCloudShowersHeavy />
                        </Box>
                        <Box sx={ForcastInnerBoxHrly}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
                          <UilSnowFlake />
                        </Box>
                        <Box sx={ForcastInnerBoxHrly}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
                          <UilCloudSun />
                        </Box>
                        <Box sx={ForcastInnerBoxHrly}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
                          <UilThunderstorm />
                        </Box>
                        <Box sx={ForcastInnerBoxHrly}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
                          <UilClouds />
                        </Box>
                        <Box sx={ForcastInnerBoxHrly}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
                          <UilCloudSunHail />
                        </Box>
                        <Box sx={ForcastInnerBoxHrly}>
                          <Typography marginTop={2} fontSize={11} variant="h1">
                            Now
                          </Typography>
                          <Typography
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                            variant="h2"
                          >
                            28°
                          </Typography>
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
                      <Stack direction={"row"}>
                        <Typography
                          marginLeft={2}
                          marginTop={1}
                          sx={{ display: "inline-block" }}
                        >
                          <UilCalender size={17} />
                        </Typography>
                        <Typography
                          variant="h1"
                          fontSize={15}
                          marginBottom={1}
                          marginTop={1}
                          marginLeft={0.5}
                        >
                          10 DAY FORECAST
                        </Typography>
                      </Stack>
                    </Box>
                    <hr style={styledHr} />
                    <Box sx={ForcastSubBoxStyle10}>
                      <Stack direction="row" spacing={""}>
                        <Box sx={FIB10DFIRST}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
                          <UilCloudShowersHeavy />
                        </Box>
                        <Box sx={ForcastInnerBox10D}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
                          <UilSnowFlake />
                        </Box>
                        <Box sx={ForcastInnerBox10D}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
                          <UilCloudSun />
                        </Box>
                        <Box sx={ForcastInnerBox10D}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
                          <UilThunderstorm />
                        </Box>
                        <Box sx={ForcastInnerBox10D}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
                          <UilClouds />
                        </Box>
                        <Box sx={ForcastInnerBox10D}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
                          <UilCloudSunHail />
                        </Box>
                        <Box sx={ForcastInnerBox10D}>
                          <Typography variant="h1" fontSize={11} marginTop={2}>
                            Today
                          </Typography>
                          <Typography variant="h2" fontSize={9} marginTop={2}>
                            16/09
                          </Typography>
                          <Typography
                            variant="h1"
                            marginTop={1}
                            marginLeft={1}
                            fontSize={26}
                          >
                            28°
                          </Typography>
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
                  <Box sx={AirQualityStyle}>
                    <Stack direction={"row"} justifyContent={'space-around'} alignItems={'center'}>
                      <Box display={'flex'}
                           alignItems={'center'}>
                      <Typography
                        marginTop={1}
                      >
                        <UilWind size={17} />
                      </Typography>
                      <Typography
                        variant="h1"
                        fontSize={13}
                        marginTop={.8}
                        marginLeft={0.9}
                      >
                        AIR QUALITY
                      </Typography>
                      </Box>
                      <Typography
                        variant="h1"
                        fontSize={10}
                        // marginTop={1.5}
                        // justifyContent={'end'}
                        backgroundColor={'red'}
                        borderRadius={1}
                        padding={'2px 8px'}
                        marginTop={1}
                      >
                        POOR
                      </Typography>
                    </Stack>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction={"column"}>
                        <Box sx={AirBox}>1</Box>
                        <Box sx={AirBox}>2</Box>
                      </Stack>
                      <Stack direction={"column"}>
                        <Box sx={AirBox}>3</Box>
                        <Box sx={AirBox}>4</Box>
                      </Stack>
                    </Box>
                  </Box>
                  <Box sx={UVindexStyle}>
                    <Stack direction={"row"}>
                      <Typography
                        marginLeft={7.5}
                        sx={{ display: "inline-block" }}
                        marginTop={1.5}
                      >
                        <UilMountainsSun size={17} />
                      </Typography>
                      <Typography
                        variant="h1"
                        fontSize={13}
                        marginTop={1.9}
                        marginLeft={0.9}
                      >

                        SUNRISE & SUNSET
                      </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                      <Box sx={SSLFstyle}>
                        <Stack direction={"row"}>
                          <Typography marginTop={1.5} marginLeft={1}>
                           
                            <UilSun size={25} />
                          </Typography>

                          <Box>
                            <Stack direction={"column"}>
                              <Typography
                                variant="h1"
                                fontSize={10}
                                marginRight={2.5}
                                marginTop={1}
                              >
                                Sunrise
                              </Typography>
                              <Typography
                                variant="h2"
                                fontSize={18}
                                marginLeft={1}
                              >
                                6:18 AM
                              </Typography>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                      <Box sx={SSRGstyle}>
                        <Stack direction={"row"}>
                          <Typography marginTop={1.5} marginLeft={1}>
    
                            <UilMoon size={25} />{" "}
                          </Typography>
                          <Box>
                            <Stack direction={"column"}>
                              <Typography
                                variant="h1"
                                fontSize={10}
                                marginRight={2.5}
                                marginTop={1}
                              >
                                Sunset
                              </Typography>
                              <Typography
                                variant="h2"
                                fontSize={18}
                                marginLeft={1}
                              >
                                6:18 PM
                              </Typography>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
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
