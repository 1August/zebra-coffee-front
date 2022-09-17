import {Route, Routes} from "react-router";
import {MainPage} from "../../pages/MainPage/MainPage"

export const MyRoutes = () => {
    const routes = [
        {
          path: '/',
          component: <MainPage/>
        },
        {
            path: '/products',
            component: <MainPage/>
        },
        {
            path: '/signUp',
            component: <MainPage/>
        },
        {
            path: '/signIn',
            component: <MainPage/>
        },
    ]

    return(
        <Routes>
            {
                routes.length > 0 && routes.map(el => (
                    <Route path={el.path} element={el.component}/>
                ))
            }
        </Routes>
    )
}