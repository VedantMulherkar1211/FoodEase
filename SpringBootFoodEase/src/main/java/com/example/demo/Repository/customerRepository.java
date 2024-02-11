package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.example.demo.Entities.Customer;

public interface customerRepository extends JpaRepository<Customer, Interger>{
	
}
 