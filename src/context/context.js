import React , {useState , useEffect} from 'react'
import axios from "axios"

const AppContext = React.createContext();
const rootApi = 'https://muslimsalat.com/'


const AppProvider = ({children}) => {

    const [location , setLocation] = useState();

    const key = process.env.REACT_APP_KEYNAME;
    
    axios(`${rootApi}${location}.json?${key}`)


    return <AppContext.Provider value="hello" > {children} </AppContext.Provider>

}

export {AppProvider , AppContext}
