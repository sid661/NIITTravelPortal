package com.stackroute.informationservice.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
@JsonIgnoreProperties(ignoreUnknown = true)
public class Restaurant {

    private String restaurantName;
    private String city;
    private byte[] image;
    private String[] howToReach,speciality;

//    public boolean isEmpty() {
//        return false;
//    }
}
