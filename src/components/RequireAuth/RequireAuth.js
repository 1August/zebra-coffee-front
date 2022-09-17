import {useSelector} from "react-redux";
import {Navigate, Route} from "react-router";
import {SignInPage} from "../../pages/SignInPage/SignInPage";

export const RequireAuth = ({children, reverse, ...props}) => {
    const token = useSelector(state => state.auth.token)

    // if (token){
    //     return children
    // }
    // return <SignInPage/>

    return token ? (reverse ? <Navigate to={'/signIn'}/> : children) :
        (reverse ? children : <Navigate to={'/signIn'}/>)
}