package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Login;
import com.example.demo.repositories.DeliveryBoyRepository;

import jakarta.transaction.Transactional;

@Service
public class DeliveryBoyService {
	
	@Autowired
	DeliveryBoyRepository crepo;
	
	@Autowired
    LoginService lservice;
	
	public DeliveryBoy getCustomer(Login l) {
		return crepo.getDeliveryBoy(l);
	}
	
	@Transactional
	public DeliveryBoy registerDeliveryBoy(DeliveryBoy dboy) {
	    Login savedLogin = lservice.saveLogin(dboy.getLoginID());
	    dboy.setLoginID(savedLogin);
	    return crepo.save(dboy);
	}

}
