export const ForcastInnerBoxStyle ={
    background:"green",
    height:"95px",
    minWidth:"80px",
    borderRadius: "20px",
    textAlign:"center",
    margin:"7px",   
}

export const ForcastSubBoxStyle ={
  background:"red",
  height:"150px",
  maxWidth:"550px",
  borderRadius: "20px",
  marginBottom:"10px",
  display:"flex",
  alignItems:"end",
  overflow:"auto",
  overflowY:"hidden",
  "&::-webkit-scrollbar": {
      height:"4px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    backgroundFilter:"blur",
    borderRadius:"2px",
    width:"550px"
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#756",
    backgroundFilter:"blur",
    borderRadius:"2px"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#678",
  }, 
}

export const ForcastBoxStyle ={
    background:"red",
    height:"170px",
    maxWidth:"570px",
    borderRadius: "20px",
    display:"flex",
    alignItems:"end",
    justifyContent:"center"
    
}
export const UVindexStyle ={
    background:"red",
    height:"170px",
    width:"100%",
    borderRadius: "20px",
    // overflow:"hidden"

}