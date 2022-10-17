package com.stackroute.RegisterService.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Address
{
private String streetname;
private String state;
private String city;
private long pincode;

}
