import { Route, Routes } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";
import Userpage from "../userpage/userpage";

export const MyRoutes = () => {
    const routes = [
        {
            path: "/",
            component: <MainPage />,
        },
        {
            path: "/products",
            component: <MainPage />,
        },
        {
            path: "/signUp",
            component: <MainPage />,
        },
        {
            path: "/signIn",
            component: <MainPage />,
        },
        {
            path: "/account",
            component: <Userpage />,
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
};
