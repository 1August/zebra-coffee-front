<<<<<<< HEAD
import { Route, Routes } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import Products from "../products/products";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { CartPage } from "../../pages/CartPage/CartPage";
import { ManagerPage } from "../../pages/ManagerPage/ManagerPage";
=======
import {Route, Routes} from "react-router";
import {MainPage} from "../../pages/MainPage/MainPage";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";
import {SignUpPage} from "../../pages/SignUpPage/SignUpPage";
import {SignInPage} from "../../pages/SignInPage/SignInPage";
import Products from "../products/products";
import {RequireAuth} from "../RequireAuth/RequireAuth";
import {ErrorPage} from "../../pages/ErrorPage/ErrorPage";
import {CartPage} from "../../pages/CartPage/CartPage";
import {ManagerPage} from "../../pages/ManagerPage/ManagerPage";
>>>>>>> main

export const MyRoutes = () => {
    const routes = [
        {
            path: "/",
            component: <MainPage />,
            requireAuth: false,
            reverse: false,
        },
        {
            path: "/cart",
            component: <CartPage />,
            requireAuth: true,
            reverse: false,
        },
        {
            path: "/signUp",
            component: <SignUpPage />,
            requireAuth: false,
            reverse: true,
        },
        {
            path: "/signIn",
            component: <SignInPage />,
            requireAuth: false,
            reverse: true,
        },
        {
<<<<<<< HEAD
            path: "/sign-up-franchise",
            component: <SignInPage />,
            requireAuth: false,
            reverse: true,
        },
        {
            path: "/manage",
            component: <ManagerPage />,
=======
            path: "/manage",
            component: <ManagerPage/>,
            requireAuth: true,
            reverse: false
        },
        {
            path: "/profile/:id",
            component: <ProfilePage/>,
>>>>>>> main
            requireAuth: true,
            reverse: false,
        },
        {
            path: "/profile/:id",
            component: <ProfilePage />,
            requireAuth: true,
            reverse: false,
        },
        {
            path: "/products",
            component: <Products />,
            requireAuth: true,
            reverse: false,
        },
        {
            path: "*",
            component: <ErrorPage />,
            requireAuth: false,
            reverse: false,
        },
    ];

    return (
        <Routes>
            {routes.length > 0 &&
                routes.map((el) =>
<<<<<<< HEAD
                    el.requireAuth ? (
=======
                    el.requireAuth ?
>>>>>>> main
                        <Route
                            key={el.path}
                            path={el.path}
                            element={
                                <RequireAuth reverse={el.reverse}>
                                    {el.component}
                                </RequireAuth>
                            }
                        /> : <Route
                            key={el.path}
                            path={el.path}
                            element={el.component}
                        />
<<<<<<< HEAD
                    ) : (
                        <Route
                            key={el.path}
                            path={el.path}
                            element={el.component}
                        />
                    )
=======
>>>>>>> main
                )}
        </Routes>
    );
};
