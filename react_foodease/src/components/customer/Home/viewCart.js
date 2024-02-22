import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for createRoot
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";


function ViewCart(){

    const navigate = useNavigate();



    const [cart, viewCart] = useState([]);

    useEffect(() => {
        // Fetch vendors from the API
        fetch(`http://localhost:8080/getCartByCustomerId/${localStorage.getItem("loginID")}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data to the console
            viewCart(data); // Set the fetched data to the state
          })
          .catch(error => console.error('Error fetching vendors', error));
      }, []);

      const total = cart.reduce((acc, ro) => {
        return acc + (ro.restaurant_menu_id.price * ro.quantity);
    }, 0);


    const PlaceOrder = () => {
        
        const orderData = {
            total_price: total, 
            order_date: new Date().toISOString(),
            order_status: 1, 
            deliveryAddress: 1, 
            user: localStorage.getItem("loginID"), 
            driver: 1, 
            orderItems: cart.map(item => ({
                price: item.restaurant_menu_id.price * item.quantity,
                quantity: item.quantity,
                restaurantMenuId: item.restaurant_menu_id.restaurant_menu_id
            }))
        };

         // Make a POST request to submit the order
    fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
    .then(response => {
        if (response.ok) {
            fetch(`http://localhost:8080/deleteCartByUserId/${localStorage.getItem("loginID")}`, {
                method: 'DELETE'
            })
            .then(deleteResponse => {
                if (deleteResponse.ok) {
                    // If cart items are deleted successfully, navigate to '/viewCart'
                    navigate('/viewCart');
                } else {
                    console.error('Failed to delete cart items');
                }
            })
            .catch(error => console.error('Error deleting cart items:', error));
        } else {
            // Handle errors here
            console.error('Failed to place order');
        }
    })
    .catch(error => console.error('Error placing order:', error));


        navigate('/enterDeliveryAddress');
    };

    return(
        <div>
            <Navbar/>
     
            <div>Cart Detail</div>

<table className="table table-bordered table-striped table-hover">
  <thead>
    <tr>
      <th>Dish Name</th>
      <th>Price</th>
      <th>Quantity</th>      
    </tr>
  </thead>
  <tbody>
    {cart.map((ro, index) => (
      <tr key={index}>
        <td>{ro.restaurant_menu_id.menu_id.name}</td> 
        <td>{ro.restaurant_menu_id.price * ro.quantity}</td>
        <td>{ro.quantity}</td>   
      </tr>
    ))}
  </tbody>
  <tr>
    <th colSpan="2">Total Price</th>
    <tr>{total}</tr>
  </tr>
  <tr>
    <th onClick={PlaceOrder}>Place Order</th>
  </tr>
</table>


<br/>
<div><li className="nav-item">
        <Link className="nav-link" to="/viewSearchRMenu">Continue Add</Link>
      </li></div>
<br/>
<br/>
{JSON.stringify(cart)}


        </div>
    )
}

export default ViewCart;