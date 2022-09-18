import './ManagerPage.scss'
import ProductsNav from "../../components/products/products-comp/products-nav";
import ProductPrice from "../../components/products/products-comp/product-price";
import ProductCard from "../../components/products/products-comp/product-card";
import {useEffect, useState} from "react";
import axios from "axios";
import {ManageCard} from "../../UI/ManageCard/ManageCard";

export const ManagerPage = () => {
    /**
     *       "id": 2,
     *       "name": "Лавандовый раф 360 мл",
     *       "category_id": 1,
     *       "price": "950",
     *       "cost_price": "665",
     *       "image": "https://cachizer1.2gis.com/market/5e3a84f2-57fb-4b8b-abf0-93cfd0841c63.png?w=1088",
     *       "description": "Lorem ipsum"
     */
    const [products, setProducts] = useState(null);

    const productTypes = [
        {
            type: 1,
            name: "Кофе",
        },
        {
            type: 2,
            name: "Чай",
        },
        {
            type: "lemonade",
            name: "Лимонады",
        },
        {
            type: "cocktail",
            name: "Коктейли",
        },
        {
            type: "sweet",
            name: "Сладкое",
        },
        {
            type: "snacks",
            name: "Снеки",
        },
    ];

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get("https://zebra-hackathon.herokuapp.com/api/products?page=1&limit=15");
            setProducts(res.data.results);
            // console.log(res.data.results)
        };
        getProducts();
    }, [])

    if (!products) {
        return (
            <div className="container">
                <h1>Loading</h1>
            </div>
        );
    }

<<<<<<< HEAD
=======

    const handleAddNewProduct = () => {
        dispatch(changeFunctionality({functionality: 'c'}))
        dispatch(showModal())
    }

>>>>>>> parent of c30575c (manager page)
    return (
        <div className="managerPage" id="managerPage">
            <div className="container">

                {/*<div className="managerPage-left">*/}
                {/*    <div className="products-nav">*/}
                {/*        <h2 className="products-nav-header">Категории</h2>*/}
                {/*        <ul className="products-nav-list">*/}
                {/*            /!*{productTypes.map(el => (*!/*/}
                {/*            /!*    <li*!/*/}
                {/*            /!*        key={el.name}*!/*/}
                {/*            /!*        // className={`products-nav-list__el ${*!/*/}
                {/*            /!*        //     productsFilter === el.type*!/*/}
                {/*            /!*        //         ? "products-nav-list__el_active"*!/*/}
                {/*            /!*        //         : ""*!/*/}
                {/*            /!*        // }`}*!/*/}
                {/*            /!*        // onClick={() => setProductsFilter(el.type)}*!/*/}
                {/*            /!*    >*!/*/}
                {/*            /!*        <div className="products-nav-list__el_name">*!/*/}
                {/*            /!*            {el.name}*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*        <div*!/*/}
                {/*            /!*            className={`products-nav-list__el_count ${*!/*/}
                {/*            /!*                productsFilter === el.type*!/*/}
                {/*            /!*                    ? "products-nav-list__el_active"*!/*/}
                {/*            /!*                    : ""*!/*/}
                {/*            /!*            }`}*!/*/}
                {/*            /!*        >*!/*/}
                {/*            /!*            {productsCount[el.type]}*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    </li>*!/*/}
                {/*            /!*))}*!/*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="managerPage-right">
                    <div className="manageCards">
                        <h2>{'Все товары'}</h2>
                        <div className="manageCards-list">
                            {
                                products?.map((el) => <ManageCard
                                        key={el.id}
                                        el={el}

                                    />)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}