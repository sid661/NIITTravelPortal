package com.example.HotelService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason ="Hotel Already Exists")
public class HotelAlreadyExistsException extends Exception
{


}
