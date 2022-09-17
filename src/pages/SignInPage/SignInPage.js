import './SignInPage.scss'
import {useState} from "react";
import {setCredentialsAction} from "../../redux/authReducer";
import {useDispatch} from "react-redux";
import {Button} from "../../UI/Button/Button";

export const SignInPage = () => {
    const dispatch = useDispatch()

    const inputs = [
        {
            name: 'email',
            id: 'email',
            placeholder: 'Email',
            type: 'email',
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
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const payload = {
            user: {
                ...info
            }
        }

        dispatch(setCredentialsAction(payload))
    }

    return(
        <div className="signInPage" id="signInPage">
            <div className="container">
                <div className="signInImg"></div>
                <div className="signInContent">
                    <h1>Sign Up</h1>
                    <form className="signInForm">
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