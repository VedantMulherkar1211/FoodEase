package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

import jakarta.transaction.Transactional;

@Service
public class LoginService {
	
	@Autowired
    LoginRepository lrepo;
	
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
	
	@Transactional
    public Login saveLogin(Login login) {
        try {
            return lrepo.save(login);
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error saving login information.", e);
        }
	}
	
	public Login getById(int loginId) {
        try {
            return lrepo.findById(loginId).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }

}
