package com.stackroute.informationservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason ="Place Already Exists")
public class PlaceAlreadyExists extends Exception{
}
