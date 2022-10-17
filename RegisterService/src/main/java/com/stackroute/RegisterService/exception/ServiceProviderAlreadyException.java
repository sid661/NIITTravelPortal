package com.stackroute.RegisterService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason ="Service Provider Already Exists")
public class ServiceProviderAlreadyException extends Exception {
}
