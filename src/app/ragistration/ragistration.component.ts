import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   onSubmit(form:NgForm){
     console.log(form);
     
   }
}
