package com.virtusa.day2.Paymentdetails;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
    	
    	  	
ApplicationContext context =new ClassPathXmlApplicationContext("beanconfig.xml");
Paym p=(Paym) context.getBean("pay");

System.out.println(p);
   ((AbstractApplicationContext) context).close();
   
    }
    
}
