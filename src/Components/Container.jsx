import { Box,Container } from '@mui/material'
// import Assets from './Assets/Clouds - 16495.mp4'


 function ContainerA() {
  return (
    <div>
        {/* <video>
            <source src="./Assets/Clouds - 16495.mp4" type="video/mp4" />
        </video> */}
    <Container 
    sx={{
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    height:"100vh"
    }}>

    <Box
    sx={{
    backgroundColor:"#030005",
    color:"white",
    width:"2000px",
    height:"700px",
    textAlign:"center",
    padding:"10px",
    borderRadius:"50px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    boxShadow: "rgb(0, 0, 0) 0px 22px 70px 4px;",
     }}
    >

  <Box  
  sx={{
    backgroundColor:"green",
    width:"400px",
    height:"600px",
    margin:"40px" ,
    borderRadius:"50px",
    
    

    }}>
   main box vertical box
  </Box>


 
    </Box>
    </Container>
    </div>

    
  
  );
}


export default ContainerA;
