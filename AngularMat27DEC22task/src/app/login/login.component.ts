import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedIn=false
  showProgressBar=false;
  constructor(private fb:FormBuilder,private router:Router,private ser:FormServiceService)
  {

  }
  form =this.fb.group({
    username:['',Validators.required,Validators.pattern("^[a-zA-Z0-9 ]*$")],
    password: ['',Validators.required]
  });

  submit() {
    this.showProgressBar=true;
    if(this.form.controls['username'].value=='admin' && this.form.controls['password'].value=='admin' )
    {
      this.loggedIn=true
      
      setTimeout(()=>
      {
        //alert('login Successful')
        this.showProgressBar=false
        this.router.navigate(['dashboard'])
        this.ser.setLogIn(this.loggedIn)


      },3000)
      //alert('login Successful')
    }
    else{
      setTimeout(()=>
      {
        alert('Invalid Credentials')
        this.showProgressBar=false
      },3000)
     
    }
    
   }
  
  
}
