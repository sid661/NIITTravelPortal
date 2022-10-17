package com.niit.userserviceusingjwt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class ServiceProvider {
    @Id
    private String email;
    private String password;

}
