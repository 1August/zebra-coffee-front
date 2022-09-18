import './SignInPage.scss'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../../UI/Button/Button";
import {NavLink, useNavigate} from "react-router-dom";
import {signIn} from "../../redux/asyncActions/fetchUsers";

export const SignInPage = () => {
    const dispatch = useDispatch()

    const nav = useNavigate()

    const token = useSelector(state => state.auth.token)
    if (token) {
        // const
        // dispatch(signIn({use}))
        nav('/products')
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
                    <h1>Sign In</h1>
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