import React from 'react'
import {useParams} from 'react-router-dom'

export default function User(){
    const {userid} = useParams();
    return(
        <>
            <div id="user" style={{height:'30vw', backgroundColor:'#424242', 
            textAlign:'center', paddingTop: '15%', color:'#fff',textShadow:'2px 2px 9px rgba(255,255,255,0.6)'}}>
                <h1>User: {userid}</h1>
            </div>
        </>
    )
}