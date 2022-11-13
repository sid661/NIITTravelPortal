package com.niit.emailservice.rabbitMq;

import com.niit.emailservice.service.EmailService;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private EmailService emailService;
    @RabbitListener(queues = "email")
    public void getDtoAndAddToDbOfGuestUser(UserDto userDto)  {
        System.out.println("called");
        String status= emailService.sendSimpleEmail(userDto);

    }
//    @RabbitListener(queues = "otp")
//    public void getDtoSendToOtp(String  email)  {
//        System.out.println("called");
//        String status= emailService.sendForgotEmailLink(email);
//
//    }

}
