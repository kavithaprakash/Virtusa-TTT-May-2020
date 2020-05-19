package com.virtusa.day2.Paymentdetails;

public class Paym {
	UPIPayment upipay;
	WalletPayment wallpay;
	@Override
	public String toString() {
		return "Paym [upipay=" + upipay + ", wallpay=" + wallpay + "]";
	}
	public UPIPayment getUpipay() {
		return upipay;
	}
	public void setUpipay(UPIPayment upipay) {
		this.upipay = upipay;
	}
	public WalletPayment getWallpay() {
		return wallpay;
	}
	public void setWallpay(WalletPayment wallpay) {
		this.wallpay = wallpay;
	}

}
