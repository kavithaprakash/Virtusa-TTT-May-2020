package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.repository.Query;
@Entity
@Table(name = "cabdetails")
public class Cabregister {
	 @Id
	    @Column(name = "ID", nullable = false)
	    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

 
	private String cid;
    private String driverName;
    private String vacantSpace;
    private String carType;
    private String source;
    private String destination;
    private String driverMob;
    private Date date;
    private String booked;
    private String amount;
    private String amountToPay;
	@Column(name = "sharable_amt", nullable = false)
	   
    public String getAmountToPay() {
		return amountToPay;
	}
	public void setAmountToPay(String amountToPay) {
		this.amountToPay = amountToPay;
	}
	@Column(name = "booked_no", nullable = false)
    
    public String getBooked() {
		return booked;
	}
	public void setBooked(String booked) {
		this.booked = booked;
	}
	@Column(name = "amount", nullable = false)
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	@Id
	@Column(name = "cid", nullable = false)
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	@Column(name = "driverName", nullable = false)
	public String getDriverName() {
		return driverName;
	}
	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}
	@Column(name = "vacantSpace", nullable = false)
	public String getVacantSpace() {
		return vacantSpace;
	}
	public void setVacantSpace(String vacantSpace) {
		this.vacantSpace = vacantSpace;
	}
	@Column(name = "carType", nullable = false)
	public String getCarType() {
		return carType;
	}
	public void setCarType(String carType) {
		this.carType = carType;
	}
	@Column(name = "source", nullable = false)
	public String getSource() {
		return source;
	}
	public void setSource(String sourcee) {
		this.source = sourcee;
	}
	@Column(name = "destination", nullable = false)
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	@Column(name = "driverMob", nullable = false)
	public String getDriverMob() {
		return driverMob;
	}
	public void setDriverMob(String driverMob) {
		this.driverMob = driverMob;
	}
	@Column(name = "date", nullable = false)
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "Cabregister [id=" + id + ", cid=" + cid + ", driverName=" + driverName + ", vacantSpace=" + vacantSpace
				+ ", carType=" + carType + ", source=" + source + ", destination=" + destination + ", driverMob="
				+ driverMob + ", date=" + date + ", booked=" + booked + ", amount=" + amount + ", amountToPay="
				+ amountToPay + "]";
	}
	
	  
	
	
	
	
    

}
