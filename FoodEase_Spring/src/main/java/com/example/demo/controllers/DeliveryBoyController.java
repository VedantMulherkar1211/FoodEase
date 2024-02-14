package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.DeliveryBoyReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.DeliveryBoyService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DeliveryBoyController {

	@Autowired
	DeliveryBoyService dservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	
	@GetMapping("/getDeliveryBoy")
	public DeliveryBoy getCustomer(@RequestParam("loginID") int loginID) {
		Login l=lservice.getById(loginID);
		return dservice.getCustomer(l);
	}
	
	
	@PostMapping("/regDeliveryBoy")
	public DeliveryBoy regCustomer(@RequestBody DeliveryBoyReg creg)
	{
		
		System.out.println("In regCustomer Method");
		try {
			System.out.println(creg);
		Role r = rservice.getRole(3);
		Login l = new Login(creg.getUsername(),creg.getEmail(),creg.getPassword(),r,true);
		Login saved = lservice.saveLogin(l);
		DeliveryBoy d = new DeliveryBoy(creg.getFname(),creg.getLname(),creg.getPhone(),creg.getAddress(),creg.getPhoto_id_number(),creg.getVehicle_License_No(),l);
	   return dservice.registerDeliveryBoy(d);
		}
		catch(Exception ex)
		{	
			ex.printStackTrace();
			return null;
		}
	}
	
}
