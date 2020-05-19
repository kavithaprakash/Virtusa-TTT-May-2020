package com.virtusa.day3.AOPDemo;

import java.time.LocalTime;
import java.time.ZoneId;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;

@Component 
@Aspect
@EnableAspectJAutoProxy
public class LoggingAspect {
	
	@After("execution(* com.virtusa.day3.AOPDemo.UseRegistration.doRegisterUser(String) )")
	public void logBefore(JoinPoint joinPoint) throws Throwable {
		System.out.println("logBefore is running!");
		System.out.println(LocalTime.now(ZoneId.of("GMT+02:30")));
		// joinPoint.proceed();
		
	
}
	}
