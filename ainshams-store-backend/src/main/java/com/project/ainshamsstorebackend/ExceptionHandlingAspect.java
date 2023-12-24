package com.project.ainshamsstorebackend;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Aspect
@Component
public class ExceptionHandlingAspect {

    @Pointcut("execution(* com.project.ainshamsstorebackend.*.*(..))")
    public void productServiceMethods() {
    }

    @AfterThrowing(pointcut = "productServiceMethods()", throwing = "ex")
    public ResponseEntity<Object> handleException(Exception ex) {
        if (ex instanceof CustomException) {
            // Handle CustomException
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
        } else {
            // Handle other exceptions
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}