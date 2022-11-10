package niit.travel.Package.Service.repository;

import niit.travel.Package.Service.domain.TourPackage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface RepositoryPackage extends MongoRepository<TourPackage,String> {
 List<TourPackage> findByDestination(String destination);
 TourPackage findByPickPoint(String pickPoint);
 TourPackage findByDropPoint(String dropPoint);
 TourPackage findByTourType(String tourType);
 List<TourPackage> findByEmail(String email);
}
