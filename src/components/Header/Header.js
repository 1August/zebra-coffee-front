import "./Header.scss";
import {NavLink} from "react-router-dom";

import {AiOutlineShoppingCart} from "react-icons/ai";

import logo from "../../assets/img/zebraCoffee.png";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../../redux/authReducer";


export const Header = () => {
    const user = useSelector(state => state.auth.user)
    let role = null
    if (user){
        role = user?.role
    }
    const dispatch = useDispatch()

    const links = (role === 'Manager' || role === 'Admin') ? [
        {
            label: "Products",
            to: "/products",
        },
        {
            label: "Manage",
            to: "/manage",
        }
    ] : [
        {
            label: "Products",
            to: "/products",
        }
    ]

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header-logo">
                    <NavLink to="/">
                        <img src={logo} alt="Zebra Coffee"/>
                    </NavLink>
                </div>
                <div className="header-links">
                    <ul>
                        {links.length > 0 ? (
                            links.map((el) => (
                                <li key={el.label}>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? "active" : ""
                                        }
                                        to={el.to}
                                        onClick={el?.onClick}
                                    >
                                        {el.label}
                                    </NavLink>
                                </li>
                            ))
                        ) : (
                            <h1>NotFound</h1>
                        )}
                    </ul>
                </div>
                <div className="header-account">
                    <ul>
                        <li>
                            <NavLink to="/cart">
                                <AiOutlineShoppingCart/>
                            </NavLink>
                        </li>
                        <li>
                            {
                                user ? <NavLink to={`/profile/${user.id}`}>
                                    <h3>{ user.userName }</h3>
                                    {/*<img*/}
                                    {/*    src={*/}
                                    {/*        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"*/}
                                    {/*    }*/}
                                    {/*    alt="Account"*/}
                                    {/*/>*/}
                                </NavLink> : <NavLink to={"/signIn"}>
                                    Sign In
                                </NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
