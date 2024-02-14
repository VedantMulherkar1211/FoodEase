package com.example.demo.Entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int loginID;
	@Column
	String username;
	@Column
	String email;
	@Column
	String password;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Login(String email, String password, Role role_id) {
		super();
		this.email = email;
		this.password = password;
		this.role_id = role_id;
	}

	public Login(String username, String email, String password, Role role_id) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.role_id = role_id;
	}
	
	public int getLoginId() {
		return loginID;
	}
	public void setLoginId(int loginId) {
		this.loginID = loginId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Role getRoleID() {
		return role_id;
	}
	public void setRoleID(Role role_id) {
		this.role_id = role_id;
	}
	
}
