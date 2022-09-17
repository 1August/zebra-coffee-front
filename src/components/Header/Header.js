import './Header.css'
import {NavLink} from 'react-router-dom'

import { AiOutlineShoppingCart } from 'react-icons/ai'

import temp from '../../assets/img/logo.png'

const links = [
    {
        label: 'Link1',
        to: '/'
    },
    {
        label: 'Link2',
        to: '/products'
    },
    {
        label: 'Link3',
        to: '/signUp'
    },
    {
        label: 'Link4',
        to: '/signIn'
    }
]

export const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header-logo"><NavLink to="/"><img src={temp} alt="Zebra Coffee"/></NavLink></div>
                <div className="header-links">
                    <ul>
                        {
                            links.length > 0 ? links.map(el => (
                                <li key={el.label}>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'active' : ''}
                                        to={el.to}
                                    >
                                        {el.label}
                                    </NavLink>
                                </li>
                            )) : <h1>NotFound</h1>
                        }
                    </ul>
                </div>
                <div className="header-account">
                    <ul>
                        <li>
                            <NavLink to="/cart">
                                <AiOutlineShoppingCart/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">
                                <img src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'} alt="Account"/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}