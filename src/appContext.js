import React, { useState, useEffect } from "react"
const appContext = React.createContext()

function AppContextProvider({children}) {
    const [images, setImages] = useState([])

    //console.log(images)

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setImages(data))
    }, [])

    return(
        <appContext.Provider value={{images}}>
            {children}
        </appContext.Provider>
    )
}

export {AppContextProvider, appContext}