package com.niit.emailservice;

import com.niit.emailservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class Controller {
    @Autowired
    EmailService emailService;

    @GetMapping("/getotp/{email}")
    public ResponseEntity<?> getOtp(@PathVariable String email)
    {
        return new ResponseEntity<>(emailService.sendForgotEmailLink(email), HttpStatus.OK);
    }
}
