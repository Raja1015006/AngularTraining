import { Component,OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userRegistrationForm!: FormGroup;
  ​
    constructor(private fb: FormBuilder) {}
  ​
    ngOnInit() {
      this.userRegistrationForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.email]
      });
    }
  
}
    
  








