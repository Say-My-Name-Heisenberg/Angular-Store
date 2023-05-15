import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent {

  products:any;

  //dependency Injection
  constructor(private rt:Router,private ds:DataService){
    this.products=this.ds.getProducts().then(res=>res.json()).then((data:any)=>{this.products=data})
  }


  details(e:any){
    console.log(e.target.id)
    this.rt.navigate(['ViewMore',e.target.id])
  }

}
