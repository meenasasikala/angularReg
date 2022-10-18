import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient : HttpClient) { }
  
  getUser(){
    return this.httpclient.get("http://localhost:3006/usermessage")
  }
  getdata(){
    return this.httpclient.get("http://localhost:3006/employee")
  }
  insert(value:any){
    console.log(value);
    return this.httpclient.post("http://localhost:3006/insert",value)
  }
  getbyid(id:any){
    return this.httpclient.get('http://localhost:3006/crud?id='+id)
  }

  getfile(){
    
  }
}