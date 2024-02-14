package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Login;
import com.example.demo.Entities.LoginCheck;
import com.example.demo.Services.LoginService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
	@Autowired
	LoginService lservice;

	@PostMapping("/checkLogin")
	public ResponseEntity<Login> checkLogin(@RequestBody LoginCheck lcheck) {
		
		 Login login=lservice.getLogin(lcheck.getEmail(), lcheck.getPassword());
		 if(login!=null)
			 return ResponseEntity.status(HttpStatus.OK).body(login);
		 else
			 return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	}
	
//	
//	@PostMapping("/login")
//    public ResponseEntity<String> registerLogin(@RequestBody Login loginData) {
//        try {
//            // Save the login data
//        	System.out.println(loginData);
//            Login savedLogin = lservice.saveLogin(loginData);
//            System.out.println("Saved");
//            return ResponseEntity.ok("Login data registered successfully!");
//        } catch (Exception e) {
//            e.printStackTrace(); // Log the exception using a logging framework like SLF4J
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login data registration.");
//        }
//    }
}
