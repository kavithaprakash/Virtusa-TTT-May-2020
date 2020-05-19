package com.virtusa.day2.PaymentJDBC;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
    
    	  
ApplicationContext context =new ClassPathXmlApplicationContext("springDAO.xml");



jdbcpayment x= (jdbcpayment) context.getBean("paym");
System.out.println(x);
x.insert();
System.out.println("inserteddd");
//Payment pt = (Payment)context.getBean("pay");
//System.out.println(pt);
   ((AbstractApplicationContext) context).close();
   
    }
    
}
