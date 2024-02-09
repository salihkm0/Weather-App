import React from "react";
import { RightsideBoxStyle } from "../ui/RightsideBoxStyle";
import {
  ForcastBoxStyle,
  ForcastInnerBoxStyle,
  ForcastSubBoxStyle,
  UVindexStyle,
} from "../ui/ForcastBoxStyle";
import { Box, Grid, Stack } from "@mui/material";

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
                  <Box sx={ForcastSubBoxStyle}>
                    <Stack direction="row">
                      <Box sx={ForcastInnerBoxStyle}>1</Box>
                      <Box sx={ForcastInnerBoxStyle}>2</Box>
                      <Box sx={ForcastInnerBoxStyle}>3</Box>
                      <Box sx={ForcastInnerBoxStyle}>4</Box>
                      <Box sx={ForcastInnerBoxStyle}>5</Box>
                      <Box sx={ForcastInnerBoxStyle}>6</Box>
                      <Box sx={ForcastInnerBoxStyle}>7</Box>
                      <Box sx={ForcastInnerBoxStyle}>8</Box>
                      <Box sx={ForcastInnerBoxStyle}>9</Box>
                      <Box sx={ForcastInnerBoxStyle}>10</Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={ForcastBoxStyle}>
                  <Box sx={ForcastSubBoxStyle}>
                    <Stack direction="row">
                      <Box sx={ForcastInnerBoxStyle}>1</Box>
                      <Box sx={ForcastInnerBoxStyle}>2</Box>
                      <Box sx={ForcastInnerBoxStyle}>3</Box>
                      <Box sx={ForcastInnerBoxStyle}>4</Box>
                      <Box sx={ForcastInnerBoxStyle}>5</Box>
                      <Box sx={ForcastInnerBoxStyle}>6</Box>
                      <Box sx={ForcastInnerBoxStyle}>7</Box>
                      <Box sx={ForcastInnerBoxStyle}>8</Box>
                      <Box sx={ForcastInnerBoxStyle}>9</Box>
                      <Box sx={ForcastInnerBoxStyle}>10</Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Box sx={UVindexStyle}>3</Box>
                  <Box sx={UVindexStyle}>4</Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
