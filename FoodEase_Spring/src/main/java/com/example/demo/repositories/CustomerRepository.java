package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("select c from Customer c where loginID= :l")
	public Customer getCustomer(Login l);
	

	
	@Query(value = "INSERT INTO customer (name, address, phone, loginID) VALUES (:name, :address, :phone, :loginId)", nativeQuery = true)
	@Transactional
	@Modifying
	void insertCustomer(@Param("name") String name, @Param("address") String address, @Param("phone") String phone, @Param("loginId") String loginId);


}
