package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.RownerRepository;

import jakarta.transaction.Transactional;

@Service
public class RownerService {
	
	@Autowired
	RownerRepository crepo;
	
	@Autowired
    LoginService lservice;
	
	public Restaurant_owner getRowner(Login l) {
		return crepo.getRowner(l);
	}
	
	@Transactional
	public Restaurant_owner registerRowner(Restaurant_owner Rowner) {
	    Login savedLogin = lservice.saveLogin(Rowner.getLoginID());
	    Rowner.setLoginID(savedLogin);
	    return crepo.save(Rowner);
	}

}
