import { Component,DoCheck, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  // count:any
  // remaining:any
  


  // firstFormGroup = this._formBuilder.group({
  //   name: ['', Validators.required],
  //   email: ['', Validators.required],
  //   fname: ['', Validators.required],
  //   mname: ['', Validators.required],
  //   gdr: ['', Validators.required],
  //   dob: ['', Validators.required],
  //   mobile:['', Validators.required],
    
  // });
  
  
  // secondFormGroup = this._formBuilder.group({
  //   accno: [''],
  //   bankname: [''],
  //   ifsc: [''],
  //   ibanking: [''],
  //   mbanking: ['']
  // });

  // thirdFormGroup = this._formBuilder.group({

  //   pradd: ['',[Validators.required,Validators.maxLength(60)]],
    
   
  // });
  // isLinear = false;

  // constructor(private _formBuilder: FormBuilder,private http:FormServiceService) {}

  // ngDoCheck(): void {
  //   this.count=this.thirdFormGroup.controls['pradd'].value?.length
    
  //   this.remaining=60-this.count
  // }
    
  //  //this.count=this.count+1
  //   //console.log(this.count)
  
  // submit()
  // {
  //   //console.log(this.thirdFormGroup.value)
  //  //this.count=this.count+1
  //  if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
    
  //   const data = {
  //   ...this.firstFormGroup.value,
  //   ...this.secondFormGroup.value,
  //   ...this.thirdFormGroup.value
  //   };
    
  //   // Continue with your submit operation
  //   console.log(data)

  //   this.http.saveData(data).subscribe(
  //     {
  //       next:(fdata)=>
  //       {
  //         console.log(fdata)
  //         alert('successful')
  //       },
  //       error:(err)=>
  //       {
  //         console.log(err)
  //       }
  //     }
  //   )



  // }
  // }

}
