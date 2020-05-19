package com.virtusa.day2.Paymentdetails;

public class WalletPayment {
	String customername;

	public String getCustomername() {
		return customername;
	}

	public void setCustomername(String customername) {
		this.customername = customername;
	}

	@Override
	public String toString() {
		return "WalletPayment [customername=" + customername + "]";
	}
}
