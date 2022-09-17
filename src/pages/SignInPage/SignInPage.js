import './SignInPage.scss'
import {useState} from "react";
import {setCredentialsAction} from "../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";
import {signUp, signIn} from "../../redux/asyncActions/fetchUsers";

export const SignInPage = () => {
    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)
    if (token){

    }

    const inputs = [
        {
            name: 'username',
            id: 'username',
            placeholder: 'Username',
            type: 'text',
            required: true
        },
        {
            name: 'password',
            id: 'password',
            placeholder: 'Password',
            type: 'password',
            required: true
        }
    ]

    const [info, setInfo] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        dispatch(signIn(info))
    }

    return(
        <div className="signInPage" id="signInPage">
            <div className="container">
                <div className="signInImg"></div>
                <div className="signInContent">
                    <h1>Sign Up</h1>
                    <form
                        className="signInForm"
                        onSubmit={handleFormSubmit}
                    >
                        {
                            inputs.length > 0 && inputs.map(el => (
                                <div key={el.id}>
                                    <label htmlFor={el.id}>
                                        {el.placeholder}
                                    </label>
                                    <input
                                        id={el.id}
                                        type={el.type}
                                        name={el.name}
                                        value={info[el.name]}
                                        placeholder={el.placeholder}
                                        onChange={handleInputChange}
                                        required={el.required}
                                    />
                                </div>
                            ))
                        }
                        <NavLink to={'/signUp'}>
                            Join us!
                        </NavLink>
                        <Button
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}