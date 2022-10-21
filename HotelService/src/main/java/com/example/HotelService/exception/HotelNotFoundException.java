package com.example.HotelService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason ="Hotel Not Found")
public class HotelNotFoundException extends Exception
{

}
