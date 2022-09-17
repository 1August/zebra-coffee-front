import './Header.css'
import {NavLink} from 'react-router-dom'

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
                                <li>
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
            </div>
        </header>
    )
}