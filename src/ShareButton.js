import React, {useState, useEffect} from "react";
import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';
import {StickyShareButtons} from 'sharethis-reactjs';
import {InlineFollowButtons} from 'sharethis-reactjs';



export const ShareButton = (props) => {
    const [fileUrl, setUrl] = useState(props.url); 
    useEffect(() => {
       setUrl(props.url) 
    }, [props])
    return (
        <>
                <div style ={{color:"white"}}>Share using</div>
        <div style = {{display:"flex", justifyContent:"center", alignItems:"centers", padding:10, marginBottom:20}}>
            <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 20,        // font size for the buttons        
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 20,          // padding within buttons (INTEGER)
            radius: 50,            // the corner radius on each button (INTEGER)
            size: 36,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url:  fileUrl,                            // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
        </div>
        </>
    )
}
