import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TourPackage } from '../model/tour-package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080";
  savePackage(data:any)
{
  return this.http.post(this.baseUrl+"/package/save",data)
}

getPackage(city:any)
{
  return this.http.get(this.baseUrl+"/package/destination/"+city)
}

findPackageByEmail(email:any)
{
  return this.http.get<TourPackage[]>(this.baseUrl+"/package/getPackageByEmail/"+email)
}
}
