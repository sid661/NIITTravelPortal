import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  registerUser="http://localhost:9000/register/registeruser";
registerServiceProviderUrl="http://localhost:9000/register/registerserviceprovider";
  constructor(private httpClient: HttpClient) { }
  register(data: any)
{
  console.log(data);
  return this.httpClient.post(this.baseUrl+"/register/registeruser",data);
}

serviceregister(data: any)
{
  console.log(data);
  return this.httpClient.post(this.baseUrl+"/register/regiterserviceprovider",data);
}



registerServiceProvider(data:any)
{
  console.log(data);
  return this.httpClient.post(this.baseUrl+"/register/regiterserviceprovider",data);

}
baseUrl="http://localhost:8080";
update(user:User)
{
  console.log(user);
  
  return this.httpClient.put(this.baseUrl+"/register/updatepassword",user)
}

}
