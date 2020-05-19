package com.virtusa.day2.IOC_Demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;




public class App 
{
    public static void main( String[] args )
    {
   	  	
ApplicationContext context =new ClassPathXmlApplicationContext("paybean.xml");
Payment pt = (Payment)context.getBean("pay");
System.out.println(pt);
//System.out.println(pt.display());
  ((AbstractApplicationContext) context).close();
   
    }
}
