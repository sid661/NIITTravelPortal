package com.stackroute.RegisterService.rabbitmq;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO
{
private String email;
private String password;
private UserRole role;

}
