import React, { useState, useContext } from "react"
import {appContext} from "../appContext"

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {toggleMethod} = useContext(appContext)

    function heartIcon() {
        if(props.img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleMethod(props.img.id)}></i>
        }else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleMethod(props.img.id)}></i>
        }
    }
    //const heartIcon = hovered && (<i className="ri-heart-line favorite" onClick={() => toggleMethod(props.img.id)}></i>)
    const cartIcon = hovered && (<i className="ri-add-circle-line cart"></i>)

    return (
        <div 
        className={`${props.className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={props.img.url} className="image-grid" />
            {heartIcon()}
            {cartIcon}

        </div>
    )
}

export default Image