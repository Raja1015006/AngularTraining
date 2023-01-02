import { Component, OnInit, DoCheck } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeServiceService } from '../services/employee-service.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedataServiceService } from '../services/sharedata-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  forminvalid=false;
  constructor(private empServices:EmployeeServiceService,private shareData:SharedataServiceService){
    this.forminvalid=true
   }
  edited=false
  refresh=false
  
  
  employee:Employee=
  {
    id:undefined,
    name:'',
    basic:undefined,
    deptNo:undefined,
    address:'',

  }
  ngOnInit(): void {
    this.shareData.id.subscribe((data)=>
    {
      this.edited=true
     this.empServices.getEmployeeById(data).subscribe(
      {
        next:(employee)=>
        {
          this.employee=employee
        }
      }
     ) 
    })
  }
    idGet:number=0;  
  resetButton()
  {
    //this.ngOnInit();
    this.employee.basic=undefined;
    this.employee.name='';
    this.employee.deptNo=undefined;
    this.employee.id=undefined;
    this.employee.address='';
    
  }
  
  addEmployee()
  {
    
    if(this.edited)
    {
      this.empServices.updateEmployee(this.employee.id,this.employee).subscribe(
        {
          next:(employee)=>
          {
              console.log(employee)
              this.refresh=true
               this.shareData.setRefresh(this.refresh)
          }
        }
      )
    }
    else{
    this.empServices.createEmployee(this.employee).subscribe({
      next:(employee)=>
      {
        //this.router.navigate(['getAllEmployees']); 
        console.log(employee);
        this.refresh=true
       // this.resetButton();
        this.shareData.setRefresh(this.refresh)
      }
    })
  }
    
  }
}

