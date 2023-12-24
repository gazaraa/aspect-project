package com.project.ainshamsstorebackend;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {


    @After("execution(* *..*Product*.*(..))")
    public void productMethods(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().getName();
        System.out.println("This action has been executed: " + methodName);
    }
    }


