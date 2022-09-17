import './CartPage.scss'
import {useEffect, useState} from "react";

export const CartPage = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const handleClickClearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    return (
        <div className="cartPage" id="cartPage">
            <div className="container">
                <ul>
                    {
                        cart?.length > 0 ? cart?.map(el => (
                            <li key={el.id}>
                                {el.id} {el.name}
                            </li>
                        )) : <h1>Cart is empty!</h1>
                    }
                </ul>
                <button
                    onClick={handleClickClearCart}
                >
                    Clear cart
                </button>
            </div>
        </div>
    )
}