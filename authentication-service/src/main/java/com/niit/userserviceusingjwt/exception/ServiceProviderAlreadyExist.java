package com.niit.userserviceusingjwt.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason = "service provider already exists")
public class ServiceProviderAlreadyExist extends Exception{
}
