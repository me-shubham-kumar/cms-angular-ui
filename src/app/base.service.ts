import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(public httpClient:HttpClient) { }

  registerUser(user: any):Observable<any>{
  return this.httpClient.post("http://localhost:9090/createProfile",user,{responseType:'json'})
  }
  loginUser(user: any):Observable<any>{
    return this.httpClient.post("http://localhost:9090/login",user,{responseType:'json'})
  }
}
