import "./CartPage.sass";
import { useEffect, useState } from "react";

import { Button } from "../../UI/Button/Button";
import { onConnect } from "../../web3";
import { mockConfigInteract } from "../../web3/smartcontracts";
import convert from "crypto-convert";

import { ethers } from "ethers";
import { decodeToken } from "react-jwt";

import CartCard from "./cart-card";
import CartModal from "./cart-modal";
import axios from "axios";

export const CartPage = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

    const [cartPrice, setCartPrice] = useState(0);
    const [numberOfProducts, setNumberOfProducts] = useState(0);

    const [deleted, setDeleted] = useState(true);

    const [payed, setPayed] = useState(false);
    const [stores, setStores] = useState(null);

    const [showModal, setShowModal] = useState();

    const [userLocation, setUserLocation] = useState("");

    const [order, setOrder] = useState(null);

    const { location, id } = decodeToken(
        JSON.parse(localStorage.getItem("user")).token
    );

    let filteredStores = null;

    if (stores) {
        filteredStores = stores?.filter((el) => {
            return el?.location_id === location?.id;
        });
    }

    useEffect(() => {
        const getStores = async () => {
            const result = await axios.get(
                "https://zebra-hackathon.herokuapp.com/api/stores/"
            );
            setStores(result.data);
        };
        getStores();
    }, []);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, [deleted]);

    useEffect(() => {
        let tempCartPrice = 0;
<<<<<<< HEAD
        cart?.forEach((el) => (tempCartPrice += +el.price * +el.productNumber));
=======
        cart?.forEach(
            (el) => (tempCartPrice += +el.price * +el.productNumber)
        );
>>>>>>> main
        setCartPrice(tempCartPrice);

        let tempNumberOfProd = 0;
        cart?.forEach((el) => (tempNumberOfProd += +el.productNumber));
        setNumberOfProducts(tempNumberOfProd);
    }, [cart, deleted]);

    const postOrder = async () => {
        const orderItems = [];
        cart?.forEach((el) => {
            for (let i = 0; i < el.productNumber; i++) {
                orderItems.push({
                    id: el.id,
                    price: el.price,
                });
            }
        });

        const result = await axios({
            method: "post",
            url: "https://zebra-hackathon.herokuapp.com/api/orders/",
            data: {
                customerId: id,
                storeId: userLocation,
                orderItems: orderItems,
            },
        });

        if (result) {
            setOrder(result.data);
        }
    };

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

                const result = await res.methods
                    .send_ETH("0xd1d0A2cB7080b8A52031a0a97DC7DDcf49A83b0d")
                    .send({
                        from: user.account,
                        gasPrice: "20000000000",
                        value: converted,
                    });

                if (result.status) {
                    postOrder();
                    setPayed(true);
                }
            });
        });
    };

    const handleClickClearCart = () => {
        localStorage.removeItem("cart");
        window.dispatchEvent(new Event("storage"));
        setCart([]);
    };

    const handleUpdate = async () => {
        const result = await axios.get(
            `https://zebra-hackathon.herokuapp.com/api/orders/${order.id}`
        );

        setOrder(result.data);
        console.log("Hello");
    };

    if (!filteredStores) {
        return <div className="">loading</div>;
    }

    return (
        <div className="cart-page" id="cartPage">
            {showModal && !payed && (
                <CartModal
                    isModal={showModal}
                    closeModal={setShowModal}
                    filteredStores={filteredStores}
                    login={login}
                    setUserLocation={setUserLocation}
                />
            )}
            <div className="container">
                <div className="cart-page-header">
                    <h2>Ваша корзина</h2>
                    <div className="cart-page-header-container">
                        <div className="cart-page-count">
                            Кол-во товара: {numberOfProducts}
                        </div>
                        <div className="cart-page-count">
                            Сумма: {cartPrice}тг
                        </div>
                        {!payed ? (
                            <>
                                <button
                                    onClick={handleClickClearCart}
                                    style={{ marginRight: "1rem" }}
                                >
                                    Очистить корзину
                                </button>
                                <Button
                                    // onClick={async () => await login()}
                                    onClick={() => setShowModal(true)}
                                >
                                    Оплатить ETH
                                </Button>
                            </>
                        ) : (
                            <>
                                <div className="cart-page-status">
                                    Статус вашего заказа:{" "}
                                    {order && order.order_status == 1
                                        ? "Готовится"
                                        : "Готов"}
                                </div>

                                <Button onClick={handleUpdate}>Обновить</Button>
                            </>
                        )}
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
                                    payed={payed}
                                />
                            </div>
                        ))
                    ) : (
                        <h1>Cart is empty!</h1>
                    )}
                </ul>
            </div>
        </div>
    );
};