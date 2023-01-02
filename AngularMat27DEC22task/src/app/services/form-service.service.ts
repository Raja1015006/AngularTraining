import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  isLoggedIn=new Subject()
  setLogIn(loggedIn:boolean)
  {
    this.isLoggedIn.next(loggedIn)
  }

  baseUrl="http://localhost:3000/saveData"

  constructor(private http:HttpClient) { }

  saveData(data:any):Observable<any>
  {
    return this.http.post<any>(this.baseUrl,data)
  }
}
