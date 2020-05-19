package com.virtusa.day3.FormHandlingMVC.model;

public class User {
	 private String firstName;
	   private String lastName;
	   private String Country;
	   private int age;
	   private String email;

	   public String getFirstName() {
	      return firstName;
	   }

	   public void setFirstName(String firstName) {
	      this.firstName = firstName;
	   }

	   public String getLastName() {
	      return lastName;
	   }

	   public void setLastName(String lastName) {
	      this.lastName = lastName;
	   }

	 

	   public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
	      return email;
	   }

	   public void setEmail(String email) {
	      this.email = email;
	   }
}
