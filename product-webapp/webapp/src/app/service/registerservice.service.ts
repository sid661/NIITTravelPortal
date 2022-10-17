import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  registerUser="http://localhost:8087/registerservice/registeruser";
registerServiceProviderUrl="http://localhost:8087/registerservice/registerserviceprovider";
  constructor(private httpClient: HttpClient) { }
  register(data: any)
{
  console.log(data);
  return this.httpClient.post(this.registerUser,data);
}

registerServiceProvider(data:any)
{
  console.log(data);
  return this.httpClient.post(this.registerServiceProviderUrl,data);

}
}
