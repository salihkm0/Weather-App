import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { ContainerStyle } from "../ui/ContainerStyle";
import { LeftsideBoxStyle } from "../ui/LeftsideBoxStyle";
import { MainBoxStyle } from "../ui/MainBoxStyle";
import { RightsideBoxStyle } from "../ui/RightsideBoxStyle";
import { ForcastBoxStyle } from "../ui/ForcastBoxStyle";
import CustomizedInputBase from "../Components/SearchBox";
import { SearchBoxStyle } from "../ui/SearchBoxStyle";
import LeftsideBox from "../Components/LeftsideBox";
import BackgroundVedio from "../Components/BackgroundVedio";

export default function Home() {
  return (
    <>
      <Container sx={ContainerStyle}>
        <BackgroundVedio />
        <Box sx={MainBoxStyle}>
          <Stack direction={"row"}>
            <Stack>
              <CustomizedInputBase sx={SearchBoxStyle} />
              <LeftsideBox />
            </Stack>
            <Box sx={RightsideBoxStyle}>
              <Stack direction={"column"}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                
                      <Box sx={ForcastBoxStyle}>1</Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={ForcastBoxStyle}>2</Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                      >
                        <Box sx={ForcastBoxStyle}>3</Box>
                        <Box sx={ForcastBoxStyle}>4</Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
