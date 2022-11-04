package com.stackroute.informationservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Restaurant {

    private String restaurantName;
    private String city;
    private byte[] image;
    private String[] howToReach,speciality;

    public boolean isEmpty() {
        return false;
    }
}
