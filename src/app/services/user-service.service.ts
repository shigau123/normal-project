import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  getData(){
    return[
      {name:"Shivam",department:"Cutting",id:101},
      {name:"Chandini",department:"Packing",id:102},
      {name:"Umapathi",department:"Quality",id:103},
      {name:"Priyanka",department:"Maintenance",id:104}
    ]
  }
}
