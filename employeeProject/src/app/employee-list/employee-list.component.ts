import { Component,OnInit } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../models/Employee';
import { EmployeeServiceService } from '../services/employee-service.service';
import { SharedataServiceService } from '../services/sharedata-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent   implements OnInit{
  employees:Employee[]=[];
  constructor(private empService:EmployeeServiceService,private shareData:SharedataServiceService){
   
  }
  
   ngOnInit(): void {
    this.shareData.refresh.subscribe(
      (data)=>
      {
        if(data)
        {
          this.empService.getAllEmployees().subscribe({
            next:(employee)=>
            { 
              console.log('METHOD IN EMPLOYEE LIST')
              this.employees=employee;
              console.log(this.employees)
              
            },
            error:(response)=>
            {
              console.log(response)
            }
            
            
          })
        }
      }
    )
    this.empService.getAllEmployees().subscribe({
      next:(employee)=>
      { 
        console.log('METHOD IN EMPLOYEE LIST')
        this.employees=employee;
        console.log(this.employees)
        
      },
      error:(response)=>
      {
        console.log(response)
      }
      
      
    })
  }

  getEmployee(id?:number)
  {
    this.shareData.setEmployee(id)
  }
  delEmployee(id?:number)
  {
      this.empService.deleteEmployee(id).subscribe(
        {
          next:(employee)=>
          {
            console.log(employee);
            this.ngOnInit()
          },
          error:(response)=>
          {
              console.log(response);
          }
        }
      )
  }

}
