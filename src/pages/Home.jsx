import { Box, Container, Stack } from "@mui/material";
import { ContainerStyle } from "../ui/ContainerStyle";
import { LeftsideBoxStyle } from "../ui/LeftsideBoxStyle";
import { MainBoxStyle } from "../ui/MainBoxStyle";
import { RightsideBoxStyle } from "../ui/RightsideBoxStyle";

export default function Home() {
  return (
    <>
      <Container sx={ContainerStyle}>
        <Box sx={MainBoxStyle}>
          <Stack direction={'row'}>
            <Box sx={LeftsideBoxStyle}>Left Side Box</Box>
            <Box sx={RightsideBoxStyle}>
            <Stack direction={'column'}>
                Right Side Box One
            </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
