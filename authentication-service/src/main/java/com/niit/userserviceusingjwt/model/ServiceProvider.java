package com.niit.userserviceusingjwt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class ServiceProvider {
    @Id
    private String email;
    private String password;

}
