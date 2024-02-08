import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import {
  InnerBox,
  LeftsideBoxStyle,
  LeftsideInnerBoxStyle,
  SideInnerBoxStyle,
} from "../ui/LeftsideBoxStyle";
import BackgroundVedio from "./BackgroundVedio";

export default function LeftsideBox() {
  return (
    <>
      <Box sx={LeftsideBoxStyle}>
      {/* <BackgroundVedio /> */}
        <Stack direction={"column"}>
          <Box sx={InnerBox}></Box>
          <Stack direction={"row"}>
            <Box sx={SideInnerBoxStyle}>Box 1</Box>
            <Box sx={SideInnerBoxStyle}>Box 2</Box>
          </Stack>
          <Stack direction={"row"}>
            <Box sx={SideInnerBoxStyle}>Box 3</Box>
            <Box sx={SideInnerBoxStyle}>Box 4</Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
