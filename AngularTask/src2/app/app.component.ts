import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  
  constructor()
  {
    if(this.username.length==0)
    {
      this.isDisabled=true;
    }
  }
 
  
  title = 'DatabindingTask';
  username:string="";
  isDisabled:boolean=false;
 
  
  resetName():void
  {
    this.username="";
    this.isDisabled=true;
  }
  doSomething(args:string)
  {
    if(args.length==0)
    {
    this.isDisabled=true;
    }
    else
    {
      this.isDisabled=false;
    }
  }
}

