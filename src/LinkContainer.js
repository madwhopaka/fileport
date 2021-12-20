import React, {useEffect,useState} from 'react'
import { Icon } from '@iconify/react';
import {ShareButton} from './ShareButton.js'; 


export const LinkContainer = (props) => {
    const [filelink, setLink] = useState(props.fileLink) ; 
    useEffect(() => {
        setLink(props.fileLink) ; 
        console.log(props.fileLink) ; 
    }, [props.fileLink]);

    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }

    async function handleCopyClick() {
        copyTextToClipboard(filelink).then(()=> {setIsCopied(true); 
        setTimeout(() => {
            setIsCopied(false) }, 2000);})
    }
    
    


    return (
      <> {filelink!=null?<div className='sharing-container'>
      <h3 className='simpletext'>Link expires in 24 hours</h3> 
      <div className='link-container'>
          <input type ="text" id ="fileUrl" readOnly value ={filelink}></input>
         {isCopied?<div className='simpletext' style = {{fontSize:"15px"}}>Copied</div>: <Icon onClick={handleCopyClick} icon="mdi:content-copy" color="#753a88" width="30" height="30" style = {{marginRight:20, marginBottom:5}} />}
      </div>
      <h2 className= "simpletext">OR</h2>
      <ShareButton url = {filelink}/>
   </div>:<div></div>}
      </>
    );
}
