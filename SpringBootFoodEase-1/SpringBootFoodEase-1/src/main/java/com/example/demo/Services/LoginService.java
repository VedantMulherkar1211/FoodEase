package com.example.demo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Login;
import com.example.demo.Repositories.LoginRepo;

import jakarta.transaction.Transactional;

@Service
public class LoginService {

	@Autowired
    LoginRepo lrepo;
	
	public Login getLogin(String email,String password) {
     	Login l;
		Optional<Login> ol=lrepo.getLogin(email, password);
		try {
			l=ol.get();
		}
		catch(Exception e) {
			l=null;
		}
		return l;
	}
	
	public Login getById1(int login_id) {
		return lrepo.findById(login_id).get();
	}
	
	 public Login saveLogin1(Login login) {
	        // Add validation or other logic if needed
	        //return lrepo.save(login);
		 try {
	            return lrepo.save(login);
	        } catch (Exception e) {
	            e.printStackTrace(); // Log the exception stack trace
	            throw new RuntimeException("Error saving login information.", e);
	        }
	    }
	
	@Transactional
    public Login saveLogin(Login login) {
        try {
            return lrepo.save(login);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception stack trace
            throw new RuntimeException("Error saving login information.", e);
        }
    }
	
	 public Login getById(int loginId) {
	        try {
	            return lrepo.findById(loginId).get();
	        } catch (Exception e) {
	            e.printStackTrace(); // Log the exception stack trace
	            throw new RuntimeException("Error getting login information by ID.", e);
	        }
    }
	 
}
