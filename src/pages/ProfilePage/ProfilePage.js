import './ProfilePage.scss'
import {MdOutlineAccountCircle} from "react-icons/md";

export const ProfilePage = () => {
    return (
        <div className="profilePage" id="profilePage">
            <div className="container">
                <div className="profileInfo">
                    <div className="profileInfo-top">
                        <img src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'} alt="Profile image"/>
                    </div>
                    <div className="profileInfo-text">
                        <h1>Mobina Mirbagheri</h1>
                        <h3>mail@gmail.com</h3>
                        <h3>+7(777)777-77-77</h3>
                        <p>Location</p>
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
                            <input type="search"/>
                        </div>
                    </div>
                    <div className="statusesList">
                        <div className="statusItem">
                            <p className="statusOrder">1</p>
                            <h3 className="statusTitle">Lorem.</h3>
                            <h3 className="statusDate">Lorem ipsum dolor.</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">2</p>
                            <h3 className="statusTitle">Consequuntur.</h3>
                            <h3 className="statusDate">Ab, doloribus libero!</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">3</p>
                            <h3 className="statusTitle">Autem?</h3>
                            <h3 className="statusDate">Ab, animi, culpa.</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">4</p>
                            <h3 className="statusTitle">Nobis?</h3>
                            <h3 className="statusDate">At, in iure.</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">5</p>
                            <h3 className="statusTitle">Voluptatibus?</h3>
                            <h3 className="statusDate">Earum, eos voluptas.</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">6</p>
                            <h3 className="statusTitle">Laborum.</h3>
                            <h3 className="statusDate">Inventore, neque suscipit?</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">7</p>
                            <h3 className="statusTitle">Perferendis.</h3>
                            <h3 className="statusDate">Et, eveniet quia.</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">8</p>
                            <h3 className="statusTitle">Atque.</h3>
                            <h3 className="statusDate">Deserunt labore, repellat.</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">9</p>
                            <h3 className="statusTitle">Quaerat!</h3>
                            <h3 className="statusDate">Alias, nulla, repellendus!</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                        <div className="statusItem">
                            <p className="statusOrder">10</p>
                            <h3 className="statusTitle">Sit.</h3>
                            <h3 className="statusDate">Earum eveniet, repellendus?</h3>
                            <button className="statusInfo">
                                <MdOutlineAccountCircle/>
                                See more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}