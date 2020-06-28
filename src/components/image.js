import React, { useState, useContext } from "react"
import {appContext} from "../appContext"
import useHover from "../Hooks/UseHover"

function Image({className, img}) {
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    const {toggleMethod, addToCart, cartItems, removeCartItems} = useContext(appContext)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleMethod(img.id)}></i>
        }else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleMethod(img.id)}></i>
        }
    }

    function cartIcon() {
        const addItems = cartItems.some(items => items.id === img.id)
        if(addItems) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItems(img.id)}></i>
        }else if(hovered){
           return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    //const heartIcon = hovered && (<i className="ri-heart-line favorite" onClick={() => toggleMethod(props.img.id)}></i>)
    //const cartIcon = hovered && (<i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>)

    return (
        <div 
        className={`${className} image-container`}
        ref={ref}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

export default Image