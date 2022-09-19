import './Loader.scss'

import loader from '../../assets/img/coffeeLoader.gif'

export const Loader = () => {
    return(
        <div className="loader" id="loader">
            <img src={loader} alt=""/>
        </div>
    )
}