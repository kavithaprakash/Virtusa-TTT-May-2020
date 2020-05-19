package com.virtusa.day3.AOPDemo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext context =new ClassPathXmlApplicationContext("springAOP.xml");
    useInterface pt = ( useInterface)context.getBean("pay");
    pt.doRegisterUser("rachu");
    //System.out.println(pt.display());
      ((AbstractApplicationContext) context).close();
    }
}
