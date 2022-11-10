package niit.travel.Package.Service.services;

import niit.travel.Package.Service.domain.TourPackage;

import java.util.List;

public interface TourPackageService {

    TourPackage savePackage(TourPackage pack,byte[] bytes);
    void deletePackage(TourPackage pack);
    TourPackage updatePackage(TourPackage tourPackage);
    List<TourPackage> showAll();
    List<TourPackage> findByDestination(String destination);

    List<TourPackage> findAllPackageByEmail(String email);
}
