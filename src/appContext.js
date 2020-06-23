import React, { useState, useEffect } from "react"
const appContext = React.createContext()

function AppContextProvider({children}) {
    const [images, setImages] = useState([])

    //console.log(images)

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function toggleMethod(id) {
        const updatePhotos = images.map(photo => {
            if(photo.id === id) {
                //console.log(id)
                //console.log(!photo.isFavorite)
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setImages(updatePhotos)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setImages(data))
    }, [])

    return(
        <appContext.Provider value={{images, toggleMethod}}>
            {children}
        </appContext.Provider>
    )
}

export {AppContextProvider, appContext}