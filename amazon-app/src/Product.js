import React from 'react';
import './Product.css';
//we pass props into our function(title, image, price, rating)
function Product({title, image, price, rating}) {
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
                <button>Add to Basket</button>
            
        </div>
    );
}

export default Product
