import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function SuperCoin() {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    useEffect(() => {
        setSuperCoins(Math.floor(totalAmount/100) * 10);
    }, [totalAmount]
    );

    return (
        <>
        <div>Number of SuperCoins: {superCoins}</div>
        </>
    );
}

export default SuperCoin;