package com.niit.emailservice.service;

import com.niit.emailservice.domain.EmailDetails;
import com.niit.emailservice.rabbitMq.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Value("${spring.mail.username}")
    private String sender;

    @Override
    public String sendSimpleEmail(UserDto user) {
        System.out.println(user.getEmail());
        try{
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(user.getEmail());

            mailMessage.setText("Congratulations...!!! You Have Successfully Registered to Niit Travel Portel...!!!");
            mailMessage.setSubject("Niit Travel Port App Registration...!!!");
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...!!!";
        }catch (Exception e){
            return "Error while Sending Mail...!!!";
        }
    }

    @Override
    public String sendEmailWithAttachments(UserDto user) {
        EmailDetails emailDetails = new EmailDetails();
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;
        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            System.out.println(user.getEmail());
            mimeMessageHelper.setTo(user.getEmail());
            mimeMessageHelper.setText("Congratulations...!!! You Have Successfully Registered to Niit Travel port...!!!");
            mimeMessageHelper.setSubject("Niit Travel Portal Registration...!!!");
            FileSystemResource fileSystemResource = new FileSystemResource(new File(emailDetails.getAttachment()));
            mimeMessageHelper.addAttachment(fileSystemResource.getFilename(),fileSystemResource);
            javaMailSender.send(mimeMessage);
            return "Mail Sent Successfully...!!!";
        }catch (MessagingException e){
            return "Error While Sending Mail...!!!";
        }
    }
    public String sendForgotEmailLink(String email)
    {
        System.out.println(email);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(sender);
        mailMessage.setTo(email);
//        String password=userAuthenticationService.getPassword(email);
        String otp="";
        for(int i=0;i<6;i++)
        {
            int i1=(int)(Math.random()*10);
            otp=otp+i1;
        }
        System.out.println(otp);
        mailMessage.setText("Your OTP is : " +otp);
        mailMessage.setSubject("forgot password reset link");
        javaMailSender.send(mailMessage);
        return otp;
    }
}

