import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  registerUser="http://localhost:8080/registerservice/registeruser";
registerServiceProviderUrl="http://localhost:8080/registerservice/registerserviceprovider";
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

savePackage(data:any)
{
  return this.httpClient.post("http://localhost:8072/Package/save",data)
}

getPackage()
{
  return this.httpClient.get("http://localhost:8072/Package/showAll")
}

registerServiceProvider(data:any)
{
  console.log(data);
  return this.httpClient.post(this.registerServiceProviderUrl,data);

}
}
