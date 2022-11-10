package niit.travel.Package.Service.services;

import niit.travel.Package.Service.domain.TourPackage;
import niit.travel.Package.Service.repository.RepositoryPackage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TourPackageServiceImpl implements TourPackageService {

    private RepositoryPackage repositoryPackage;
    @Autowired
    public TourPackageServiceImpl(RepositoryPackage repositoryPackage) {
        this.repositoryPackage = repositoryPackage;
    }

    @Override
    public TourPackage savePackage(TourPackage pack,byte[] bytes) {
        pack.setImages(bytes);
        return repositoryPackage.save(pack);
    }

    @Override
    public void deletePackage(TourPackage pack) {
        repositoryPackage.delete(pack);
    }

    @Override
    public TourPackage updatePackage(TourPackage tourPackage) {
        Optional<TourPackage> packagetcheck = repositoryPackage.findById(tourPackage.getDestination());
        if(packagetcheck.isPresent()){
            TourPackage packageUpdate = packagetcheck.get();
            packageUpdate.setDropPoint(tourPackage.getDropPoint());
            packageUpdate.setCostPerPerson(tourPackage.getCostPerPerson());
            packageUpdate.setPlacesToVisit(tourPackage.getPlacesToVisit());
            return repositoryPackage.save(packageUpdate);
        }else return null;
    }

    @Override
    public List<TourPackage> showAll() {
        return repositoryPackage.findAll();
    }

    @Override
    public List<TourPackage> findByDestination(String destination) {
        return repositoryPackage.findByDestination(destination);
    }

    @Override
    public List<TourPackage> findAllPackageByEmail(String email) {
        System.out.println(email);
        return repositoryPackage.findByEmail(email);
    }




}
