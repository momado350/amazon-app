import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
//we pass props into our function(title, image, price, rating)
function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log('this is the basket >>>', basket);
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                {/**using title inside curly brakets to render tilte of products */}
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>⭐</p>
                    
                    ))}
                    
                    </div>
                

            </div>
            <img src={image}alt=""/>
                <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    );
}

export default Product
