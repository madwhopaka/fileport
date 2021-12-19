import React, {useState, useEffect}from 'react'
import './App.css';

export const ProgressBar = (props) => {
  
   
  const [width, setWidth] = useState(0) ; 
  useEffect(() => {
    console.log(props.percent)
    const bgProgres = document.querySelector(".bg-progress") ;
    console.log(bgProgres); 
  }, [props.percent]); 
    return (
      <>
      {props.percent>0?    <div className="progress-container">   
      <div style = {{width: `${props.percent}%`, transition: "width .25s linear", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className = 'bg-progress'> 
      <div className= "percent" style = {{marginLeft:30, fontSize: "15px", display:"flex"}}>{props.percent}% </div>   
      </div>
      </div>:<div></div>}
      </>
    )
}
