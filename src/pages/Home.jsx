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
import RightsideBox from "../Components/RightsideBox";

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
            <RightsideBox/>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
