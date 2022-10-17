package com.niit.userserviceusingjwt.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason = "user already exists")
public class UserAlreadyExistException extends Exception{
}
