
package com.foodease.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class HomeController {
	
	@GetMapping("/")
	public String home() {
		return "Application is working";
	}
	
	@GetMapping("/test")
	public ResponseEntity<List<String>> getTestData()
	{
		List<String>obj=new ArrayList<String>();
		obj.add("North Indian");
		return new ResponseEntity<List<String>>(obj,HttpStatus.OK);
	}
	

}
