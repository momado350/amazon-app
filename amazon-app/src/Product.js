import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>⭐</p>
                    </div>
                

            </div>
            <img src="https://books.google.com/books/content/images/frontcover/DSxjDwAAQBAJ?fife=w200-h300"alt=""/>
                <button>Add to Basket</button>
            
        </div>
    );
}

export default Product
