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
        navigate("/chooseAddress");
        
    };

    const viewSearchRMenu = () => {
        navigate("/viewSearchRMenu");
      };

    return(
        <div>
            <Navbar/>
     
            <h1>Cart Detail</h1>

            {cart.length === 0 ? (
            <h3>Your cart is empty.</h3>
        ) : (
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
                    <td>{total}</td>
                </tr>
                <tr>
                    <th onClick={PlaceOrder}>Place Order</th>
                </tr>
            </table>
        )}
        {cart.length === 0 && (
            <div>
                <button onClick={viewSearchRMenu}>Continue Add</button>
                
            </div>
        )}
        <br/><br/>
        {JSON.stringify(cart)}


        </div>
    )
}

export default ViewCart;