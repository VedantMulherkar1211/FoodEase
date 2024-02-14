package com.example.demo.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	@Column
	String name;
	@Column
	String address;
	@Column
	String phone;
	@OneToOne
	@JoinColumn(name="loginID")
	Login login_id;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String name, String address, String phone, Login login_id) {
		super();
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.login_id = login_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Login getLoginID() {
		return login_id;
	}
	public void setLoginID(Login loginID) {
		this.login_id = loginID;
	}
}
