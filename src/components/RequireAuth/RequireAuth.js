import {useSelector} from "react-redux";
import {Navigate, Route} from "react-router";
import {SignInPage} from "../../pages/SignInPage/SignInPage";
import {MainPage} from "../../pages/MainPage/MainPage";

export const RequireAuth = ({children = <MainPage/>, reverse = false, ...props}) => {
    const token = useSelector(state => state.auth.token)

    // if (token){
    //     return children
    // }
    // return <SignInPage/>

    return token ? (reverse ? <Navigate to={'/'}/> : children) :
        (reverse ? children : <Navigate to={'/signIn'}/>)
}