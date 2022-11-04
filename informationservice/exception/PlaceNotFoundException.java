package com.stackroute.informationservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason ="Place Not Found")
public class PlaceNotFoundException extends Exception{
}
