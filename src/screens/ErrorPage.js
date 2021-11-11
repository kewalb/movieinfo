import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ErrorPage(){
    const history = useHistory()
    return(
        <div style={{objectFit:'contain'}}>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/Robo-404-Page.gif" alt="404 error" style={{width:'100%'}} onClick={()=>history.push('/')}/>
        </div>
    )
}