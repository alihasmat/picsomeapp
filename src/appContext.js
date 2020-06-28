import React, { useState, useEffect } from "react"
const appContext = React.createContext()

function AppContextProvider({children}) {
    const [images, setImages] = useState([])
    const [cartItems, setCartItems] = useState([])

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

    function addToCart(newItems) {
        setCartItems(prevItems => [...prevItems, newItems])
    }

    function removeCartItems(id) {
        setCartItems(prevItems => prevItems.filter(items => items.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }
    

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setImages(data))
    }, [])

    return(
        <appContext.Provider value={{images, toggleMethod, addToCart, cartItems, removeCartItems, emptyCart}}>
            {children}
        </appContext.Provider>
    )
}

export {AppContextProvider, appContext}