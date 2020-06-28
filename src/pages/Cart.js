import React, {useContext, useState} from "react"
import {appContext} from "../appContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(appContext)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const [buttonText, setButtonText] = useState("Place Order")

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed")
            setButtonText("Place Order")
            emptyCart()
        }, 3000);
    }

    const cartItemsDetail = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {cartItemsDetail}
            <p className="total-cost">Total Cost: {totalCostDisplay} </p>
            {cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}> {buttonText} </button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart