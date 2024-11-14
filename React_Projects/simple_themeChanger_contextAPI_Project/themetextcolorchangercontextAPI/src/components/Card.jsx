import React from 'react'
import useTheme from '../context/Themecontext'

export default function Card(){
    const {themeMode} = useTheme()

    return(
        <div id="card">
            <h1 id="h1" >Card<h2 className={themeMode}>Child-Card</h2></h1>
        </div>
    )
}