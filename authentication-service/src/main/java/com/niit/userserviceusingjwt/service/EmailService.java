package com.niit.userserviceusingjwt.service;

import com.niit.userserviceusingjwt.model.User;

public interface EmailService {
    String sendSimpleEmail(User user);
    public String sendEmailWithAttachments(User user);
}
