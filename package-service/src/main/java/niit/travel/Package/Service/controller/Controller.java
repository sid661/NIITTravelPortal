package niit.travel.Package.Service.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import niit.travel.Package.Service.domain.TourPackage;
import niit.travel.Package.Service.services.TourPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/package")

public class Controller {

    private TourPackageService tourPackageService;
    private ResponseEntity responseEntity;


    @Autowired
    public Controller(TourPackageService tourPackageService) {
        this.tourPackageService = tourPackageService;
    }


@PostMapping("/save")
public ResponseEntity<?> registerUser(@RequestParam("file")MultipartFile file,@RequestParam("details") String details)  {
    try{
        TourPackage tourPackage=new ObjectMapper().readValue(details,TourPackage.class);


        responseEntity = new ResponseEntity<>(tourPackageService.savePackage(tourPackage,file.getBytes()), HttpStatus.OK);
    }
     catch (IOException e) {
        throw new RuntimeException(e);
    }
    return responseEntity;
}


    @PutMapping("/update")
    public ResponseEntity<?> updatePackage(@RequestBody TourPackage pack){
        responseEntity = new ResponseEntity<>(tourPackageService.updatePackage(pack),HttpStatus.OK);
        return responseEntity;
    }
    @DeleteMapping("/delete")
    public ResponseEntity daletePackage(@RequestBody TourPackage pack){
        tourPackageService.deletePackage(pack);
        responseEntity = new ResponseEntity<>("successfully deleted !!!" , HttpStatus.OK);
        return responseEntity;
    }
    @GetMapping("/showAll")
    public ResponseEntity<?> showAllPackage(){
        responseEntity = new ResponseEntity<>(tourPackageService.showAll(),HttpStatus.OK);
        return responseEntity;
    }
    @GetMapping("/destination/{destination}")
    public ResponseEntity<?> destination(@PathVariable String destination){
        responseEntity = new ResponseEntity<>(tourPackageService.findByDestination(destination),HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("/getPackageByEmail/{email}")
    public ResponseEntity<?> getAllPackageByEmail(@PathVariable String email){
        List<TourPackage> packageList=tourPackageService.findAllPackageByEmail(email);
        System.out.println(packageList);
        responseEntity = new ResponseEntity<>(packageList,HttpStatus.OK);
        return responseEntity;
    }



}
