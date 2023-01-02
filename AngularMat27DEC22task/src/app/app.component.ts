import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormServiceService } from './services/form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showReg=false;
  constructor(public dialog:MatDialog,private ser:FormServiceService){}
  ngOnInit(): void {
    this.ser.isLoggedIn.subscribe(
      (data)=>
      {
        if(data)
        {
          console.log('data  '+data)
          this.showReg=true;
        }
      }
    )
  }
  title = 'ProjectNav';
  openCEODialog()
  {
    this.dialog.open(CEOComponent, {
      height: '400px',
      width: '600px',
    });
  }

  

  openContactDetails()
  {
    this.dialog.open(ContactDetails, {
      height: '400px',
      width: '600px',
    });

  }


}
@Component({
  selector: 'CEOComponent',
  templateUrl: 'CEODialog.html',
})
export class CEOComponent{}

@Component({
  selector: 'ContactDetails',
  templateUrl: 'contactDetails.html',
})
export class ContactDetails{}
