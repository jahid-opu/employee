import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    let totalSalary=0;
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i].salary;
        totalSalary += salary
        
    }
    return (
        <div>
           <h3>Total Profile: {cart.length}</h3>
           <h5>Total Salary: {totalSalary}</h5>
        </div>
    );
};

export default Cart;