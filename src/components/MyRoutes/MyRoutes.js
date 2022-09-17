import {Route, Routes} from "react-router";
import {MainPage} from "../../pages/MainPage/MainPage";
// import Userpage from "../userpage/userpage";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";
import {SignUpPage} from "../../pages/SignUpPage/SignUpPage";
import {SignInPage} from "../../pages/SignInPage/SignInPage";
import Products from "../products/products";

export const MyRoutes = () => {
    const routes = [
        {
            path: "/",
            component: <MainPage/>,
        },
        {
            path: "/cart",
            component: <MainPage/>,
        },
        {
            path: "/signUp",
            component: <SignUpPage/>,
        },
        {
            path: "/signIn",
            component: <SignInPage/>,
        },
        // {
        //     path: "/account",
        //     component: <Userpage/>,
        // },
        {
            path: "/profile",
            component: <ProfilePage/>,
        },
        {
            path: "/products",
            component: <Products/>,
        },
    ];

    return (
        <Routes>
            {routes.length > 0 &&
                routes.map((el) => (
                    <Route
                        key={el.path}
                        path={el.path}
                        element={el.component}
                    />
                ))}
        </Routes>
    );
}