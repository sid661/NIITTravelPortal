package com.niit.emailservice.service;

import com.niit.emailservice.rabbitMq.UserDto;

public interface EmailService {

    String sendSimpleEmail(UserDto user);
    public String sendEmailWithAttachments(UserDto user);

    String sendForgotEmailLink(String email);
}
