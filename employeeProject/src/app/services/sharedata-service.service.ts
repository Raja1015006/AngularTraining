import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class SharedataServiceService {


  

  id=new Subject()
  constructor() { }
  setEmployee(id?:number)
  {
    this.id.next(id)
  }

  refresh=new Subject()
  setRefresh(refresh:boolean)
  {
    this.refresh.next(refresh)
  }

}
