package com.stackroute.RegisterService.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ServiceProvider
{
private String name;
@Id
private String email;
private long phoneNo;
private String password;
private String gst;
private long accountNo;
private String cin;
private Address address;

}
