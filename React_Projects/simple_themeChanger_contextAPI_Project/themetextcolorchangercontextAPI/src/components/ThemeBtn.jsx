import React from 'react'
import useTheme from '../context/Themecontext'

export default function ThemeBtn(){
   //import useTheme that provides the global object values to be consumed here
   const {themeMode, lightTheme, darkTheme} = useTheme();
    
   //define function
    function onChangeStatus(e){
        const statusChange = e.currentTarget.checked
        statusChange? darkTheme():lightTheme();
    }

    return(
        <div id="themeBtn">
        <button>

            <
            input
            type='checkbox'
            value=''
            checked={ themeMode == 'dark' }
            onChange={onChangeStatus}

            />
        </button>
        </div>
    )
}