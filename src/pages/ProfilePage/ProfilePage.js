import "./ProfilePage.scss";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/authReducer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "../../UI/Input/Input";
import axios from "axios";

export const ProfilePage = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);

    const handleSignOutClick = (e) => {
        e.preventDefault();
        dispatch(logOutAction());
    };

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const [orders, setOrders] = useState(null);
    const [allOrders, setAllOrders] = useState(null);
    const [activeButtons, setActiveButtons] = useState(null);

    useEffect(() => {
        const getOrders = async () => {
            const result = await axios.get(
                `https://zebra-hackathon.herokuapp.com/api/orders/user/${user.id}`
            );
            setOrders(result.data);
        };
        getOrders();
    }, []);

    useEffect(() => {
        const getAllOrders = async () => {
            const allOrders = [];

            orders.forEach(async (el) => {
                const result = await axios.get(
                    `https://zebra-hackathon.herokuapp.com/api/orders/${el.id}`
                );

                allOrders.push({
                    id: result.data.id,
                    orderItems: result.data.orderItems,
                });
            });

            setAllOrders(allOrders);
        };
        if (orders) {
            getAllOrders();
        }
    }, [orders]);

    useEffect(() => {
        if (!activeButtons && orders) {
            const tempActiveButtons = [];
            orders.forEach((el) => {
                tempActiveButtons.push({
                    id: el.id,
                    active: false,
                });
            });
            setActiveButtons(tempActiveButtons);
        }
    }, [orders]);

    // const orders = [
    //     {
    //         statusOrder: 1,
    //         statusTitle: "Lorem",
    //         statusDate: Date.now(),
    //         statusInfo: "See more",
    //     },
    //     {
    //         statusOrder: 2,
    //         statusTitle: "Lorem",
    //         statusDate: Date.now(),
    //         statusInfo: "See more",
    //     },
    //     {
    //         statusOrder: 3,
    //         statusTitle: "Lorem",
    //         statusDate: Date.now(),
    //         statusInfo: "See more",
    //     },
    //     {
    //         statusOrder: 4,
    //         statusTitle: "Lorem",
    //         statusDate: Date.now(),
    //         statusInfo: "See more",
    //     },
    //     {
    //         statusOrder: 5,
    //         statusTitle: "Lorem",
    //         statusDate: Date.now(),
    //         statusInfo: "See more",
    //     },
    // ];

    if (!orders) {
        return <div className="loading">Loading</div>;
    }

    return (
        <div className="profilePage" id="profilePage">
            <div className="container">
                <div className="profileInfo">
                    <div className="profileInfo-top">
                        <img src={user.image} alt="Profile image" />
                    </div>
                    <div className="profileInfo-text">
                        <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
                        <h3>{user?.email}</h3>
                        <h3>{user?.phone}</h3>
                        <p>{user?.location.country}</p>
                        <p>
                            <NavLink
                                to={"/signOut"}
                                onClick={handleSignOutClick}
                            >
                                SignOut
                            </NavLink>
                        </p>
                    </div>
                </div>
                <div className="profileStatus">
                    <h1>Orders</h1>
                    <ul>
                        <li>Lorem ipsum dolor.</li>
                        <li>Consectetur iusto, voluptas?</li>
                        <li>Est, laboriosam ullam!</li>
                    </ul>
                </div>
                <div className="allStatuses">
                    <div className="statusesHeader">
                        <h1>All orders</h1>
                        <div className="statusesSearch">
                            <Input
                                type="search"
                                value={searchQuery}
                                onChange={handleSearchQueryChange}
                                placeholder={"Search"}
                            />
                        </div>
                    </div>
                    <div className="statusesList">
                        <div className="statusItem">
                            <p className={"statusOrder"}>#</p>
                            <p className={"statusOrder"}>ID</p>
                            <h3 className="statusTitle">Адрес</h3>
                            <h3 className="statusDate">Дата</h3>
                            <h3 className="statusDate">Действие</h3>
                        </div>

                        {orders.length > 0 ? (
                            orders
                                // .filter((el) =>
                                //     el.statusTitle
                                //         .toLowerCase()
                                //         .includes(searchQuery.toLowerCase())
                                // )
                                ?.map((el, index) => {
                                    const date = new Date(el?.order_date)
                                        .toDateString()
                                        .split(" ");

                                    // const actButton = activeButtons.filter(
                                    //     (button) => button.id === el.id
                                    // )[0];

                                    return (
                                        <>
                                            <div className="statusItem">
                                                <p className={"statusOrder"}>
                                                    {index + 1}
                                                </p>
                                                <p className={"statusOrder"}>
                                                    {el?.id}
                                                </p>
                                                <h3 className="statusTitle">
                                                    {el?.street}
                                                </h3>
                                                <h3 className="statusDate">
                                                    {date[2]} {date[1]}{" "}
                                                    {date[3]}{" "}
                                                </h3>
                                                <button
                                                    className="statusInfo"
                                                    // onClick={() =>
                                                    //     activeButtons.filter(
                                                    //         (button) =>
                                                    //             button.id ===
                                                    //             el.id
                                                    //     )[0]
                                                    // }
                                                >
                                                    <MdOutlineAccountCircle />
                                                    Подробнее
                                                </button>
                                            </div>
                                            <div className="statusItem">
                                                123
                                            </div>
                                        </>
                                    );
                                })
                        ) : (
                            <h1>List is empty!</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
