import "./CartPage.sass";
import { useEffect, useState } from "react";

import { Button } from "../../UI/Button/Button";
import { onConnect } from "../../web3";
import { mockConfigInteract } from "../../web3/smartcontracts";
import convert from "crypto-convert";

import { ethers } from "ethers";
import CartCard from "./cart-card";

export const CartPage = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

    const [cartPrice, setCartPrice] = useState(0);
    const [numberOfProducts, setNumberOfProducts] = useState(0);

    const [deleted, setDeleted] = useState(true);

    const [payed, setPayed] = useState(false);

    const [stores, setStores] = useState();

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, [deleted]);

    useEffect(() => {
        let tempCartPrice = 0;
        cart.forEach(
            (el) => (tempCartPrice += parseInt(el.price) * el.productNumber)
        );
        setCartPrice(tempCartPrice);

        let tempNumberOfProd = 0;
        cart.forEach((el) => (tempNumberOfProd += parseInt(el.productNumber)));
        setNumberOfProducts(tempNumberOfProd);
    }, [cart, deleted]);

    const login = async () => {
        await onConnect().then((data) => {
            mockConfigInteract().then(async (res) => {
                const user = JSON.parse(localStorage.getItem("userAccount"));
                await convert.ready();

                let ETHPrice = convert.ETH.USD(1);
                let value = cartPrice / (470 * ETHPrice);

                let converted = ethers.utils.parseUnits(
                    value.toFixed(6).toString(),
                    "ether"
                );

                console.log(converted);

                const result = await res.methods
                    .send_ETH("0xd1d0A2cB7080b8A52031a0a97DC7DDcf49A83b0d")
                    .send({
                        from: user.account,
                        gasPrice: "20000000000",
                        value: converted,
                    });

                if (result.status) {
                    setPayed(true);
                }
            });
        });
    };

    const handleClickClearCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
    };

    return (
        <div className="cart-page" id="cartPage">
            <div className="container">
                <div className="cart-page-header">
                    <h2>Ваша корзина</h2>
                    <div className="cart-page-count">
                        У вас {numberOfProducts} товара на сумму: {cartPrice}тг
                    </div>
                </div>

                <ul style={{ padding: 0 }}>
                    {cart?.length > 0 ? (
                        cart?.map((el) => (
                            <div className="cart-card-el">
                                <CartCard
                                    el={el}
                                    deleted={deleted}
                                    setDeleted={setDeleted}
                                />
                            </div>
                        ))
                    ) : (
                        <h1>Cart is empty!</h1>
                    )}
                </ul>
                <button
                    onClick={handleClickClearCart}
                    style={{ marginRight: "2rem" }}
                >
                    Очистить корзину
                </button>
                <Button onClick={async () => await login()}>
                    Оплатить ETH
                </Button>
            </div>
        </div>
    );
};
