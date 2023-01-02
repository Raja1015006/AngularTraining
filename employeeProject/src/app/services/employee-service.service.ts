import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient){}
  baseUrl:string="http://localhost:3000" ;
  getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseUrl+"/getAllEmployees");
  }
  deleteEmployee(id?:number):Observable<Employee>
  {
    return this.http.delete<Employee>(this.baseUrl+"/getAllEmployees/"+id);
  }
  createEmployee(employee:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.baseUrl+"/getAllEmployees",employee);
  }
  getEmployeeById(id:any):Observable<Employee>
  {
      return this.http.get<Employee>(this.baseUrl+'/getAllEmployees/'+id)
  }
  updateEmployee(id:any,employee:Employee)
  {
    return this.http.put<Employee>(this.baseUrl+'/getAllEmployees/'+id,employee)
  }
}
