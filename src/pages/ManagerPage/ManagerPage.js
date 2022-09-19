import './ManagerPage.scss'
import ProductsNav from "../../components/products/products-comp/products-nav";
import ProductPrice from "../../components/products/products-comp/product-price";
import ProductCard from "../../components/products/products-comp/product-card";
import {useEffect, useState} from "react";
import axios from "axios";
import {ManageCard} from "../../UI/ManageCard/ManageCard";
import {Button} from "../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeFunctionality, showModal} from "../../redux/modalReducer";
import {Loader} from "../../UI/Loader/Loader";

export const ManagerPage = () => {
    const dispatch = useDispatch()
    const { isOpen, title = 'New product', content } = useSelector(state => state.modal)
    const {
        categoryId = 0,
        name = '',
        image = '',
        price = '',
        description = ''
    } = content

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
            const res = await axios.get("https://zebra-hackathon.herokuapp.com/api/products?page=1&limit=40");
            setProducts(res.data.results);
            // console.log(res.data.results)
        };
        getProducts();
    }, [])


    const handleAddNewProduct = () => {
        dispatch(changeFunctionality({functionality: 'c'}))
        dispatch(showModal())
    }
    if (!products) {
        return (
            <Loader/>
        );
    }


    return (
        <div className="managerPage" id="managerPage">
            <div className="container">
                <div className="managerPage-right">
                    <div className="manageCards">
                        <div>
                            <h2>Все товары </h2>
                            <Button
                                onClick={handleAddNewProduct}
                            >
                                Добавить новый продукт
                            </Button>
                        </div>

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