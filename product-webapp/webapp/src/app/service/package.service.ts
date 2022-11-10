import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TourPackage } from '../model/tour-package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }


  savePackage(data:any)
{
  return this.http.post("http://localhost:9000/package/save",data)
}

getPackage(city:any)
{
  return this.http.get("http://localhost:9000/package/destination/"+city)
}

findPackageByEmail(email:any)
{
  return this.http.get<TourPackage[]>("http://localhost:9000/package/getPackageByEmail/"+email)
}
}
