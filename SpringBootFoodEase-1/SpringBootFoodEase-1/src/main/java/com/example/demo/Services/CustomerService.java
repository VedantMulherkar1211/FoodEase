package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Customer;
import com.example.demo.Entities.Login;
import com.example.demo.Repositories.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository crepo;
	
	@Autowired
    LoginService lservice;
	
	public Customer getCustomer(Login l) {
		return crepo.getCustomer(l);
	}
	
	@Transactional
	public Customer registerCustomer(Customer customer) {
	    Login savedLogin = lservice.saveLogin(customer.getLoginID());
	    customer.setLoginID(savedLogin);
	    return crepo.save(customer);
	}
}