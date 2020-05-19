package com.virtusa.day2.IOC_Demo;

public class Payment {
	String name;
	String address;
	long  ph;
	Payment(String name, String add, long ph)
	{
		this.name=name;
		this.address=add;
		this.ph=ph;
			}
	public void destroy() throws Exception {
		System.out.println("destroy called");
	}

	
	public void init() throws Exception {
		System.out.println("init called");
		
	}
	
	@Override
	public String toString() {
		return "Payment [name=" + name + ", address=" + address + ", ph=" + ph + "]";
	}

	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	//System.out.println(this.name);
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPh() {
		return ph;
	}
	public void setPh(long ph) {
		this.ph = ph;
	}
	
}
