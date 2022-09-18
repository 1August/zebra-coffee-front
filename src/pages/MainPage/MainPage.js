import './MainPage.scss'

import temp1 from '../../assets/img/coffeBeans.jpg'
import {AiOutlineArrowUp} from "react-icons/ai";

export const MainPage = () => {
    return(
        <div className="mainPage" id="mainPage">
            <a href="#mainPage" className="goTopBtn">
                <AiOutlineArrowUp/>
            </a>

            <div className="banner" id="banner">
                <div className="containerWrapper">
                <div className="container">
                        <div className="bannerText">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
                                exercitationem.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos itaque molestiae
                                porro, quidem voluptatem!</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section1">
                <div className="container">
                    <div className="mainLeft">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sit?</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda consectetur odit omnis
                            reiciendis reprehenderit!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto at corporis dignissimos
                            doloribus error esse illo laborum, modi nam neque, nihil quasi qui recusandae sapiente tempora
                            tenetur, ullam voluptate.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet atque autem commodi
                            consequuntur dignissimos distinctio ducimus, enim eveniet fuga laudantium magnam maiores maxime
                            modi mollitia nisi obcaecati officia omnis quam quas quis quisquam sit tempora unde voluptate
                            voluptatibus.</p>
                    </div>
                    <div className="mainRight"><img src={temp1} alt=""/></div>
                </div>
            </section>
            <section className="section2">
                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <div className="cardTop"><img src={temp1} alt="temp1"/></div>
                            <div className="cardBottom">
                                <h3>Lorem ipsum dolor.</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias asperiores atque
                                    impedit quisquam veniam.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardTop"><img src={temp1} alt="temp1"/></div>
                            <div className="cardBottom">
                                <h3>Assumenda, inventore, quaerat.</h3>
                                <h6>Accusamus maxime neque obcaecati praesentium quaerat tempora.</h6>
                                <p>A alias aut cumque deserunt, dolorum ea iure laborum magnam quaerat saepe, totam ullam
                                    ut.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardTop"><img src={temp1} alt="temp1"/></div>
                            <div className="cardBottom">
                                <h3>Distinctio, dolorem laborum!</h3>
                                <h6>Consequatur deleniti distinctio explicabo, nesciunt possimus velit?</h6>
                                <p>Ab aperiam architecto error et exercitationem facilis illum, maxime, neque officiis rerum
                                    sapiente, soluta voluptate.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardTop"><img src={temp1} alt=""/></div>
                            <div className="cardBottom">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nisi!</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis expedita maxime
                                    officia ut. Dolores eum expedita facere maxime necessitatibus neque.</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut consequatur eum,
                                    iste modi nobis non sed? Aperiam aspernatur deserunt, facere facilis ipsa molestiae
                                    neque nesciunt quam quo quos. Atque minima porro qui sapiente suscipit. A adipisci
                                    earum harum maxime.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="cardTop"><img src={temp1} alt="temp1"/></div>
                            <div className="cardBottom">
                                <h3>Distinctio, dolorem laborum!</h3>
                                <h6>Consequatur deleniti distinctio explicabo, nesciunt possimus velit?</h6>
                                <p>Ab aperiam architecto error et exercitationem facilis illum, maxime, neque officiis rerum
                                    sapiente, soluta voluptate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}