import React from "react";
import { RightsideBoxStyle } from "../ui/RightsideBoxStyle";
import {
  ForcastBoxStyle,
  ForcastInnerBoxStyle,
  ForcastSubBoxStyle,
  UVindexStyle,
  FBhourly,
  styledHr,
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
                    <Stack direction={"column"}>
                      <Box>sss</Box>
                      <hr style={styledHr} />
                      <Stack direction="row" spacing={""}>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={ForcastBoxStyle}>
                  <Box sx={ForcastSubBoxStyle}>
                  <Stack direction={"column"}>
                      <Box>sss</Box>
                      <hr style={styledHr} />
                      <Stack direction="row" spacing={""}>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                        <Box sx={ForcastInnerBoxStyle}>
                          <p sx={{}}> Now </p>
                          <h2 sx={FBhourly}>28°</h2>
                        </Box>
                      </Stack>
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
