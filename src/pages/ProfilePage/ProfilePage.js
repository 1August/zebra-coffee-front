import "./ProfilePage.scss";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/authReducer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "../../UI/Input/Input";
import axios from "axios";

import ProfileModal from "./profile-modal";
import { Button } from "../../UI/Button/Button";

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
    const [isModal, setIsModal] = useState(null);
    const [isFManage, setIsFManage] = useState(null);

    const [allFranchisers, setAllFranchisers] = useState(null);

    let role = null;
    if (user) {
        role = user?.role;
    }

    // useEffect(() => {
    //     const getFranchisers = async () => {
    //         const result = await axios.get(
    //             "https://zebra-hackathon.herokuapp.com/api/franchisers"
    //         );

    //         setAllFranchisers(result.data);
    //     };
    //     getFranchisers();
    // }, []);

    // console.log(allFranchisers);

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

    if (!orders) {
        return <div className="loading">Loading</div>;
    }

    if (!activeButtons) {
        return <div className="loading">Loading</div>;
    }

    if (!allOrders) {
        return <div className="loading">Loading</div>;
    }

    const handleClick = (index) => {
        const tempButtons = [...activeButtons];

        tempButtons[index].active = !tempButtons[index].active;

        setActiveButtons(tempButtons);
    };

    return (
        <div className="profilePage" id="profilePage">
            {isModal && (
                <ProfileModal
                    isModal={isModal}
                    setIsModal={setIsModal}
                    userId={user.id}
                />
            )}

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
                        {/* Admin */}
                        {/* {role === "Franchiser" ? ( */}
                        <Button
                            style={{ width: "100%" }}
                            onClick={() => setIsFManage(true)}
                        >
                            Manage franchisers
                        </Button>
                        {/* ) : ( */}
                        {/* <Button
                            style={{ width: "100%" }}
                            onClick={() => setIsModal(true)}
                        >
                            Become franchiser
                        </Button> */}
                        {/* )} */}
                        <p>
                            <NavLink
                                to={"/signOut"}
                                onClick={handleSignOutClick}
                            >
                                <Button style={{ width: "100%" }}>
                                    SignOut
                                </Button>
                            </NavLink>
                        </p>
                    </div>
                </div>

                {!isFManage ? (
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

                                        let actButton = -1;
                                        activeButtons.forEach(
                                            (button, index) => {
                                                if (button.id === el.id) {
                                                    actButton = index;
                                                }
                                            }
                                        );

                                        return (
                                            <>
                                                <div className="statusItem">
                                                    <p
                                                        className={
                                                            "statusOrder"
                                                        }
                                                    >
                                                        {index + 1}
                                                    </p>
                                                    <p
                                                        className={
                                                            "statusOrder"
                                                        }
                                                    >
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
                                                        onClick={() =>
                                                            handleClick(
                                                                actButton
                                                            )
                                                        }
                                                    >
                                                        <MdOutlineAccountCircle />
                                                        Подробнее
                                                    </button>
                                                </div>
                                                {activeButtons[actButton]
                                                    .active && (
                                                    <div className="">
                                                        <div className="statusItem">
                                                            <p
                                                                className={
                                                                    "statusTitle"
                                                                }
                                                            >
                                                                #
                                                            </p>
                                                            <p
                                                                className={
                                                                    "statusTitle"
                                                                }
                                                            >
                                                                Название
                                                            </p>
                                                            <p
                                                                className={
                                                                    "statusTitle"
                                                                }
                                                            >
                                                                Количество
                                                            </p>
                                                            <h3 className="statusTitle">
                                                                Цена
                                                            </h3>
                                                        </div>
                                                        <div>
                                                            {allOrders[
                                                                actButton
                                                            ] &&
                                                                allOrders[
                                                                    actButton
                                                                ].orderItems.map(
                                                                    (
                                                                        el,
                                                                        index
                                                                    ) => (
                                                                        <div className="statusItem">
                                                                            <p
                                                                                className={
                                                                                    "statusTitle"
                                                                                }
                                                                            >
                                                                                {index +
                                                                                    1}
                                                                            </p>
                                                                            <p
                                                                                className={
                                                                                    "statusTitle"
                                                                                }
                                                                            >
                                                                                {
                                                                                    el.name
                                                                                }
                                                                            </p>
                                                                            <p
                                                                                className={
                                                                                    "statusTitle"
                                                                                }
                                                                            >
                                                                                {
                                                                                    el.quantity
                                                                                }
                                                                            </p>
                                                                            <h3 className="statusTitle">
                                                                                {
                                                                                    el.list_price
                                                                                }
                                                                            </h3>
                                                                        </div>
                                                                    )
                                                                )}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        );
                                    })
                            ) : (
                                <h1>List is empty!</h1>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="allStatuses">
                        <div className="statusesHeader">
                            <h1>All franchisers</h1>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
