import { CircularProgress } from "@mui/material"

function Loading() {
  return (
     
    <div style = {{display:"flex",flexDirection:"column",color:"white", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <CircularProgress></CircularProgress>
        <h4>Connecting to the server...</h4>
    </div>
  )
}

export default Loading