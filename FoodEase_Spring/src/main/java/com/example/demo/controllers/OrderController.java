package com.example.demo.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryAddress;
import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Login;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderDetailDummy;
import com.example.demo.entities.OrderDetails;
import com.example.demo.entities.OrderDummy;
import com.example.demo.entities.OrderStatus;
import com.example.demo.entities.RestaurantMenu;
import com.example.demo.services.CustomerService;
import com.example.demo.services.DeliveryAddressService;
import com.example.demo.services.DeliveryBoyService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OrderService;
import com.example.demo.services.OrderStatusService;
import com.example.demo.services.RestaurantMenuService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {
	
	@Autowired
	OrderService oserv;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	CustomerService cuserv;
	
	@Autowired
	DeliveryAddressService dserv;
	
	@Autowired
	DeliveryBoyService dbserv;
	
	@Autowired
	OrderStatusService orserv;
	
	@Autowired
	RestaurantMenuService rmserv;
	
	@PostMapping("/saveOrder")
	public Order saveor(@RequestBody Order o)
	{
		return oserv.saveOrder(o);
	}
	
	
	@PostMapping("/orders")
    public ResponseEntity<String> createOrder(@RequestBody OrderDummy orderDummy) {
        Order order = new Order();
        order.setTotal_price(orderDummy.getTotal_price());
        order.setOrder_date(orderDummy.getOrder_date());
        
        Login l1= lserv.getById(orderDummy.getUser());
		Customer c= cuserv.getCustomer(l1);
		order.setUser_id(c);
		
		DeliveryAddress d=dserv.getById(orderDummy.getDeliveryAddress());
		order.setDelivery_addresses_id(d);
		
		DeliveryBoy db= dbserv.getById(orderDummy.getDriver());
		order.setDriver_id(db);
		
		OrderStatus os= orserv.getById(orderDummy.getOrder_status());
		order.setOrder_status(os);
		
		

        Set<OrderDetails> orderDetailsSet = new HashSet<>();
        for (OrderDetailDummy orderDetailDummy : orderDummy.getOrderItems()) {
            OrderDetails orderDetails = new OrderDetails();
            orderDetails.setPrice(orderDetailDummy.getPrice());
            orderDetails.setQuantity(orderDetailDummy.getQuantity());
            RestaurantMenu rm=rmserv.getById(orderDetailDummy.getRestaurantMenuId());
            orderDetails.setRestaurant_menu_id(rm);
            orderDetailsSet.add(orderDetails);
        }
        order.setOrderItems(orderDetailsSet);

        Order savedOrder = oserv.saveOrder(order);
        if (savedOrder != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Order created successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create order");
        }
    }

}
