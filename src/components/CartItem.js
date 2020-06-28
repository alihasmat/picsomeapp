import React, {useContext, useState} from "react"
import {appContext} from "../appContext"
import useHover from "../Hooks/UseHover"

function CartItem({item}) {
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    const {removeCartItems} = useContext(appContext)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={iconClassName} 
            onClick={() => removeCartItems(item.id)}
            ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem