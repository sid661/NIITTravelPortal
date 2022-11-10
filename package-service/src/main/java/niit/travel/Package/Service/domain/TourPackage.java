package niit.travel.Package.Service.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class TourPackage {
   private String email;
   private String agencyName;                      //input field
   private String destination;                      //input field
   private List<String> citiesAddedInPackage;
   private String pickPoint;                        //pickPoint
   private String dropPoint;                        //Drop point
      private List<String> transferHotel;
   private int noOfTravellers;
   private byte[] images;                           //Images
   private int noOfNights;                          //Total no of nights
   private double costPerPerson;                    //Per person cost
   private String food;                             //breakfast or dinner included or excluded//drop down
   private String tourType; //honymoon,family,solo,relegious, //drop down                       //honeymoon-religious-family-solo-business
   private List <String> activities;                //the places in packages
   private List <String> placesToVisit;             //included in packages to visit
   private List<String> transport;                   //(hotel-via cabs).
   private String tourGuide;//drop down

}
