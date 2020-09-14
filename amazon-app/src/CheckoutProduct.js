import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        
        // this function remove items from basket
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
                
        })
        
        
    } 
    
    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct__image' src={image } />
            <div className='CheckoutProduct__info'>
                <p className='CheckoutProduct__title'>{title}</p>
                <p className='CheckoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                
                <div className='CheckoutProduct__rating'>
                {Array(rating)
                    .fill()
                    //the _ is when we dont care about the first parameter
                    .map((_, i) => (
                    <p>⭐</p>
                    
                    ))}

                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>

            
        </div>
    )
}

export default CheckoutProduct
