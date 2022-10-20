package com.stackroute.informationservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Place {
    private String city,place,description,thingToDo;
    private byte[] image;
    private String[] howToReach,nearByPlaces;


}
