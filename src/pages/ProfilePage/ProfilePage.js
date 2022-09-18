import './ProfilePage.scss'
import {MdOutlineAccountCircle} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../../redux/authReducer";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {Input} from "../../UI/Input/Input";

export const ProfilePage = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    const handleSignOutClick = e => {
        e.preventDefault()
        dispatch(logOutAction())
    }

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQueryChange = e => {
        setSearchQuery(e.target.value)
    }

    const orders = [
        {
            statusOrder: 1,
            statusTitle: 'Lorem',
            statusDate: Date.now(),
            statusInfo: 'See more'
        },
        {
            statusOrder: 2,
            statusTitle: 'Lorem',
            statusDate: Date.now(),
            statusInfo: 'See more'
        },
        {
            statusOrder: 3,
            statusTitle: 'Lorem',
            statusDate: Date.now(),
            statusInfo: 'See more'
        },
        {
            statusOrder: 4,
            statusTitle: 'Lorem',
            statusDate: Date.now(),
            statusInfo: 'See more'
        },
        {
            statusOrder: 5,
            statusTitle: 'Lorem',
            statusDate: Date.now(),
            statusInfo: 'See more'
        },
    ]

    return (
        <div className="profilePage" id="profilePage">
            <div className="container">
                <div className="profileInfo">
                    <div className="profileInfo-top">
                        <img
                            src={user.image}
                            alt="Profile image"
                        />
                    </div>
                    <div className="profileInfo-text">
                        <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
                        <h3>{user?.email}</h3>
                        <h3>{user?.phone}</h3>
                        <p>{user?.location.country}</p>
                        <p>
                            <NavLink
                                to={'/signOut'}
                                onClick={handleSignOutClick}
                            >
                                SignOut
                            </NavLink>
                        </p>
                    </div>
                </div>
                <div className="profileStatus">
                    <h1>Orders</h1>
                    <ul>
                        <li>Lorem ipsum dolor.</li>
                        <li>Consectetur iusto, voluptas?</li>
                        <li>Est, laboriosam ullam!</li>
                    </ul>
                </div>
                <div className="allStatuses">
                    <div className="statusesHeader">
                        <h1>All orders</h1>
                        <div className="statusesSearch">
                            <Input
                                type="search"
                                value={searchQuery}
                                onChange={handleSearchQueryChange}
                                placeholder={'Search'}
                            />
                        </div>
                    </div>
                    <div className="statusesList">
                        {
                            orders.length > 0 ? orders.filter(el => el.statusTitle.toLowerCase().includes(searchQuery.toLowerCase()))?.map(el => (
                                <div className="statusItem">
                                    <p className={'statusOrder'}>
                                        {el?.statusOrder}
                                    </p>
                                    <h3 className="statusTitle">
                                        {el?.statusTitle}
                                    </h3>
                                    <h3 className="statusDate">
                                        {el?.statusDate}
                                    </h3>
                                    <button className="statusInfo">
                                        <MdOutlineAccountCircle/>
                                        {el?.statusInfo}
                                    </button>
                                </div>
                            )) : <h1>List is empty!</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}