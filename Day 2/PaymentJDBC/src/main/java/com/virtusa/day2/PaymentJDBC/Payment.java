package com.virtusa.day2.PaymentJDBC;

public class Payment {
UPIPayment upipay;
WalletPayment wallpay;


@Override
public String toString() {
	return "Payment [upipay=" + upipay + ", wallpay=" + wallpay + "]";
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
