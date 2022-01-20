import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private user:UserServiceService) { }
  result
  ngOnInit(): void {
    // this.result=this.user.getData()
  }
  name:string
  res:string
  val:string='TY'
  dept:string='DEV'
  rand:number=Math.random()*1000
  full:number=Math.floor(this.rand)

  idGenerator(){
    let abc
    for(let i=0;i<3;i++){
      this.res=this.val+=this.name[i]
    }
    abc=this.res+this.dept+this.full
    let nameDisp=document.getElementById('display')
    nameDisp.innerText=abc;
  }

}
