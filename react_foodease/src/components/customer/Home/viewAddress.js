import ReactDOM from 'react-dom'; // Import ReactDOM for createRoot
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


function Viewaddress()
{    
     
    const [address, viewAddress] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch vendors from the API
        fetch(`http://localhost:8080/getDeliveryAddressByUser/${localStorage.getItem("loginID")}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data to the console
            viewAddress(data); // Set the fetched data to the state
          })
          .catch(error => console.error('Error fetching vendors', error));
      }, []);


      const handleAddAddressClick = () => {
        // Navigate to the '/enterDeliveryAddress' route
        navigate('/enterDeliveryAddress');
    };
      
   

    return(
        <div>
             <Navbar/>
     
     <div>Delivery Address</div>

                <div className="row">
                    {address.map((ro, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{ro.address}</h5>
                                    <p className="card-text">Area: {ro.area_id.area_name}</p>
                                    <p className="card-text">Pincode: {ro.area_id.pincode}</p>
                                    <p className="card-text">City: {ro.area_id.city_id.city_name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                <button onClick={handleAddAddressClick}>Add Address</button>
                </div>
        </div>
    )
}

export default Viewaddress;