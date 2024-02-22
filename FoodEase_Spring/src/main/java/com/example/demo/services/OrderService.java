package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orepo;
	
	@Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orepo = orderRepository;
    }

    public Order saveOrders(Order order) {
        return orepo.save(order);
    }

	
	public Order saveOrder(Order o)
	{
		return orepo.save(o);
	}
}


