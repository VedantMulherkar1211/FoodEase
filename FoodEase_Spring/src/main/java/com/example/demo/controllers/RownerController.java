package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.entities.Restaurant_ownerReg;
import com.example.demo.entities.Role;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.RownerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RownerController {
	
	@Autowired
	RownerService oservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	
	@GetMapping("/getRowner")
	public Restaurant_owner getRowner(@RequestParam("loginID") int loginID) {
		Login l=lservice.getById(loginID);
		return oservice.getRowner(l);
	}
	
	
	@PostMapping("/regRowner")
	public Restaurant_owner regCustomer(@RequestBody Restaurant_ownerReg creg)
	{
		System.out.println("In Cust Method");
		try {
			System.out.println(creg);
		Role r = rservice.getRole(2);
		Login l = new Login(creg.getUsername(),creg.getEmail(),creg.getPassword(),r,true);
		Login saved = lservice.saveLogin(l);
	    Restaurant_owner d = new Restaurant_owner(creg.getFname(),creg.getLname(),creg.getAddress(),creg.getPhone(),l);
	   return oservice.registerRowner(d);
		}
		catch(Exception ex)
		{	
			ex.printStackTrace();
			return null;
		}
	}


}
