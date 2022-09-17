import { useState, useEffect } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const ProductPrice = ({ max, setRightPrice, setLeftPrice }) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(max);

    const handleInput = (e) => {
        setMinValue(e.minValue);
        setLeftPrice(e.minValue);
        setRightPrice(e.maxValue);
        setMaxValue(e.maxValue);
    };

    useEffect(() => {
        setLeftPrice(minValue);
        setMaxValue(maxValue);
    });

    useEffect(() => {
        setMaxValue(max);
    }, [max]);

    return (
        <div className="product-price">
            <h2 className="product-price-header">Цены</h2>
            <div className="product-price-range">
                Диапазон: {minValue}тг - {maxValue}тг
            </div>
            <MultiRangeSlider
                min={0}
                max={max}
                step={5}
                ruler={false}
                label={false}
                preventWheel={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </div>
    );
};

export default ProductPrice;
