import './SignUpPage.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {signUp} from "../../redux/asyncActions/fetchUsers";
import {Button} from "../../UI/Button/Button";

import initialPhoto from '../../assets/img/initialPhoto.png'

export const SignUpPage = () => {
    const dispatch = useDispatch()

    const inputs = [
        {
            name: 'username',
            id: 'username',
            placeholder: 'Username',
            type: 'text',
            required: true
        },
        {
            name: 'firstName',
            id: 'firstName',
            placeholder: 'First name',
            type: 'text',
            required: true
        },
        {
            name: 'lastName',
            id: 'lastName',
            placeholder: 'Last name',
            type: 'text',
            required: true
        },
        {
            name: 'phoneNumber',
            id: 'phoneNumber',
            placeholder: 'Phone number',
            type: 'tel',
            required: true
        },
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
        },
        {
            name: 'repeatPassword',
            id: 'repeatPassword',
            placeholder: 'Repeat password',
            type: 'password',
            required: true
        }
    ]

    const [info, setInfo] = useState({
        username: '',
        firstName: '',
        lastName: '',
        locationId: 5,
        phoneNumber: '+',
        email: '',
        password: '',
        repeatPassword: '',
        image: initialPhoto
    })

    const handleInputChange = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (info.password !== info.repeatPassword){
            setInfo({...info, repeatPassword: ''})
            return
        }

        const {repeatPassword: _, ...payload} = {...info}
        dispatch(signUp(payload))
    }

    return(
        <div className="signUpPage" id="signUpPage">
            <div className="container">
                <div className="signUpImg"></div>
                <div className="signUpContent">
                    <h1>Sign Up</h1>
                    <form
                        className="signUpForm"
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

                        <Button
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}