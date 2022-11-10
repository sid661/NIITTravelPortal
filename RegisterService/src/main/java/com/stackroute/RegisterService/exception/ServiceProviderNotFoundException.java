package com.stackroute.RegisterService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason ="Service PRovider Not Found")
public class ServiceProviderNotFoundException extends Exception
{

}
