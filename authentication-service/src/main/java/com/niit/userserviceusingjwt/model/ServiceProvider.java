package com.niit.userserviceusingjwt.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class ServiceProvider {
    @Id
    private String email;
    private String password;

}
