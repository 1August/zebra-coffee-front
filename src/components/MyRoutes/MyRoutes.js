import {Route, Routes} from "react-router";
import {MainPage} from "../../pages/MainPage/MainPage";
// import Userpage from "../userpage/userpage";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";
import {SignUpPage} from "../../pages/SignUpPage/SignUpPage";
import {SignInPage} from "../../pages/SignInPage/SignInPage";
import Products from "../products/products";
import {RequireAuth} from "../RequireAuth/RequireAuth";
import {ErrorPage} from "../../pages/ErrorPage/ErrorPage";

export const MyRoutes = () => {
    const routes = [
        {
            path: "/",
            component: <MainPage/>,
            requireAuth: false,
            reverse: false
        },
        {
            path: "/cart",
            component: <MainPage/>,
            requireAuth: true,
            reverse: false
        },
        {
            path: "/signUp",
            component: <SignUpPage/>,
            requireAuth: false,
            reverse: true
        },
        {
            path: "/signIn",
            component: <SignInPage/>,
            requireAuth: false,
            reverse: true
        },
        // {
        //     path: "/account",
        //     component: <Userpage/>,
        // },
        {
            path: "/profile",
            component: <ProfilePage/>,
            requireAuth: true,
            reverse: false
        },
        {
            path: "/products",
            component: <Products/>,
            requireAuth: true,
            reverse: false
        },
        {
            path: "/*",
            component: <ErrorPage/>,
            requireAuth: false,
            reverse: false
        },
    ];

    return (
        <Routes>
            {routes.length > 0 &&
                routes.map((el) =>
                    el.requireAuth ? <Route
                        key={el.path}
                        path={el.path}
                        element={<RequireAuth>
                            el.component
                        </RequireAuth>
                        }
                    /> : <Route
                        key={el.path}
                        path={el.path}
                        element={el.component}
                    />
                )}
        </Routes>
    );
}