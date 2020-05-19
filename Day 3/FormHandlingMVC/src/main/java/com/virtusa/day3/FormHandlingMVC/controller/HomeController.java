package com.virtusa.day3.FormHandlingMVC.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.virtusa.day3.FormHandlingMVC.model.User;



@Controller
public class HomeController {

	 
	   @ModelAttribute("user")
	   public User setUpUserForm() {
	      return new User();
	   }

	   /*
	    * Open new registration form
	    */
	   @GetMapping("/")
	   public String registration() {
	      
	      return "home";
	   }

	   /*
	    *  Save user object
	    */
	   @PostMapping("/saveUser")
	   public String saveUser(@ModelAttribute("user") User user, Model model) {

	     
	      model.addAttribute("message", "User Details ");

	      return "registrationSuccess";
	   }
}
