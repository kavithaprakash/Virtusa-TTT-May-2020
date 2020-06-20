package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Cabregister;


public interface CabRepository extends JpaRepository<Cabregister, String>{
	// @Query("select t from cabregister where t.cid=?1")
	//	public Cabregister findByCid(String cabId);
	// @Query("SELECT t FROM Thing t WHERE t.fooIn = ?1 AND t.bar = ?2")
	 //   ThingEntity findByFooInAndBar(String fooIn, String bar);
}
