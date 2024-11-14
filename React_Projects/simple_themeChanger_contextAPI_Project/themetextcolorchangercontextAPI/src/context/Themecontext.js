import React, {createContext, useContext} from 'react'

//create object of default variables/methods using createContext
const ThemeContext = createContext({
    themeMode : 'light',
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

//create Provider
export const ThemeProvider = ThemeContext.Provider;

//create useTheme consumer used by all other components
export default function useTheme(){
    return useContext(ThemeContext)
}