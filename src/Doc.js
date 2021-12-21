import React, {useState,useEffect} from 'react'
import './App.css' ; 

export const Doc = ({doc}) => {
    const [docu, setDoc] = useState(doc) ;
    useEffect(() => {
        console.log(doc) ; 
        console.log(docu); 
      setDoc(doc); 
    }, {doc}) 
    return (
      docu?  <div id ="documentation" >
      <h3 className ="simpletext"> What is CloudShare ? </h3>
      <p className = "simpletext">It is a platform through which you can remotely share files over the cloud.
       Do you want to someone access to your file only for a day or two ? This is the place to be.  
      </p>
      <h3 className ="simpletext">  Steps :  </h3>
        <ul className ="simpletext"><li className = "simpletext">
             Drop or browse the file and upload it here.
        </li>
        <li className = "simpletext">
             Share the link you get, with the person you want to share your file with.
        </li>
        <li className = "simpletext">
             The reciever downloads the file from the server. 
        </li>
        <li className = "simpletext">
             Yaay. That's it. You have shared a file secretly which will disappear after 24 hours. 
        </li>
        </ul>
 
     </div>:<div></div>
    )
}
