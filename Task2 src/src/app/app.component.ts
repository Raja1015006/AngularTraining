import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  status=['Stable','Crirtical','Finished'];
  projNamevalidation=false;
  ishidden=true;
  invalidForm=false;
  show=false;
  constructor(private fb:FormBuilder){}

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  projectForm=this.fb.group({
    projName:['',Validators.required],
    email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
    status:['']
  })
  checkProjName()
  {
    if(this.projectForm.get('projName')?.value=='Test')
    {
      this.projNamevalidation=true;
      
    }
    else if(this.projectForm.invalid)
    {
        this.invalidForm=true;
    }
    else
    {
      this.show=true;
    }
    
  }
}
