export const ForcastInnerBoxStyle ={
    background:"green",
    height:"95px",
    minWidth:"80px",
    borderRadius: "20px",
    textAlign:"center",
    margin:"7px",

   
}
export const ForcastBoxStyle ={
    background:"red",
    height:"170px",
    maxWidth:"570px",
    borderRadius: "20px",
    display:"flex",
    alignItems:"center",
    overflow:"auto",
    overflowY:"hidden",
    // scrollbarWidth: "none",
    // msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#756",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#678",
      },
}
export const UVindexStyle ={
    background:"red",
    height:"170px",
    width:"100%",
    borderRadius: "20px",
    // overflow:"hidden"

}