import React, {useState} from 'react'
import { db } from './firebase';
import './Orders.css'
import {useStateValue} from './StateProvider'

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        )
            
        )
            }
    }, [])
    return (
        <div className="orders">
            <h1>Your orders</h1>
            
        </div>
    )
}

export default Orders
