package com.virtusa.day2.PaymentJDBC;

public class UPIPayment {
String name;

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

@Override
public String toString() {
	return "UPIPayment [name=" + name + "]";
}

}
