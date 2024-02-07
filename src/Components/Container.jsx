import { Box, Container } from "@mui/material";
import { ContainerStyle } from "../ui/ContainerStyle";
import MainBox from "./MainBox";
// import Assets from './Assets/Clouds - 16495.mp4'

function ContainerA() {
  return (
    <>
      <Container
        sx={ContainerStyle}
      >
        <MainBox>
          
        </MainBox>
      </Container>
    </>
  );
}

export default ContainerA;
