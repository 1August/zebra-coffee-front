import './ProfilePage.scss'
import {MdOutlineAccountCircle} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../../redux/authReducer";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export const ProfilePage = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    // console.log(user)

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
                            src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
                            alt="Profile image"/>
                    </div>
                    <div className="profileInfo-text">
                        <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
                        <h3>{user?.email}</h3>
                        <h3>{user?.phoneNumber}</h3>
                        <p>{user?.location}</p>
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
                    <div className="statusesHe1ader">
                        <h1>All orders</h1>
                        <div className="statusesSearch">
                            <input
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
                                        {el.statusOrder}
                                    </p>
                                    <h3 className="statusTitle">
                                        {el.statusTitle}
                                    </h3>
                                    <h3 className="statusDate">
                                        {el.statusDate}
                                    </h3>
                                    <button className="statusInfo">
                                        <MdOutlineAccountCircle/>
                                        {el.statusInfo}
                                    </button>
                                </div>
                            )) : <h1>List is empty!</h1>
                        }
                        {/*<div className="statusItem">*/}
                        {/*    */}
                        {/*    <p className="statusOrder">1</p>*/}
                        {/*    <h3 className="statusTitle">Lorem.</h3>*/}
                        {/*    <h3 className="statusDate">Lorem ipsum dolor.</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">2</p>*/}
                        {/*    <h3 className="statusTitle">Consequuntur.</h3>*/}
                        {/*    <h3 className="statusDate">Ab, doloribus libero!</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">3</p>*/}
                        {/*    <h3 className="statusTitle">Autem?</h3>*/}
                        {/*    <h3 className="statusDate">Ab, animi, culpa.</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">4</p>*/}
                        {/*    <h3 className="statusTitle">Nobis?</h3>*/}
                        {/*    <h3 className="statusDate">At, in iure.</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">5</p>*/}
                        {/*    <h3 className="statusTitle">Voluptatibus?</h3>*/}
                        {/*    <h3 className="statusDate">Earum, eos voluptas.</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">6</p>*/}
                        {/*    <h3 className="statusTitle">Laborum.</h3>*/}
                        {/*    <h3 className="statusDate">Inventore, neque suscipit?</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">7</p>*/}
                        {/*    <h3 className="statusTitle">Perferendis.</h3>*/}
                        {/*    <h3 className="statusDate">Et, eveniet quia.</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">8</p>*/}
                        {/*    <h3 className="statusTitle">Atque.</h3>*/}
                        {/*    <h3 className="statusDate">Deserunt labore, repellat.</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">9</p>*/}
                        {/*    <h3 className="statusTitle">Quaerat!</h3>*/}
                        {/*    <h3 className="statusDate">Alias, nulla, repellendus!</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="statusItem">*/}
                        {/*    <p className="statusOrder">10</p>*/}
                        {/*    <h3 className="statusTitle">Sit.</h3>*/}
                        {/*    <h3 className="statusDate">Earum eveniet, repellendus?</h3>*/}
                        {/*    <button className="statusInfo">*/}
                        {/*        <MdOutlineAccountCircle/>*/}
                        {/*        See more*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}