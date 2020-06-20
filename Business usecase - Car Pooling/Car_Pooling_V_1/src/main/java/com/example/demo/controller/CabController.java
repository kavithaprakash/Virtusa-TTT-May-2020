package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Cabregister;
import com.example.demo.model.Employee;
import com.example.demo.repo.CabRepository;


@RestController 
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cab")
public class CabController {
	@Autowired
    private CabRepository cabRepository;

    @GetMapping("/details")
    public List<Cabregister> getAllEmployees() {
    System.out.println("dfd");
    	return cabRepository.findAll();
    }
    @PostMapping("/details")
    public Cabregister createEmployee(@Valid @RequestBody Cabregister cab) {
        return cabRepository.save(cab);
    }
    @GetMapping(path="/details/{id}")
    public List<Cabregister> requestCab(@PathVariable(value = "id") String cabId) throws ResourceNotFoundException
        {
    	
    	Cabregister cab=cabRepository.getOne(cabId);
    	
    	if(Integer.parseInt(cab.getBooked())+1<=Integer.parseInt(cab.getVacantSpace()))
    	{
    	int booking = Integer.parseInt(cab.getBooked())+1;
    	cab.setBooked(String.valueOf(booking));
    	int amt = Integer.parseInt(cab.getAmount())/Integer.parseInt(cab.getBooked());
    	cab.setAmountToPay(String.valueOf(amt));
    		Cabregister cr = cabRepository.save(cab);
    		}
    	else
    		System.out.println("error");
        return cabRepository.findAll();
       
    }
    
}
