import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClientModule) { }
  // submit(){
  //  return this.httpclient.get('http://localhost:3006/usermessage')
  // }
}
