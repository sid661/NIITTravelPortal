import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  return this.httpClient.post(this.registerUser,data);
}

serviceregister(data: any)
{
  console.log(data);
  return this.httpClient.post(this.registerServiceProviderUrl,data);
}



registerServiceProvider(data:any)
{
  console.log(data);
  return this.httpClient.post(this.registerServiceProviderUrl,data);

}
}
