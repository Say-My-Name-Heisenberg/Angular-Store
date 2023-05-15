import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component {

  

  pro:any;

  constructor(private ar:ActivatedRoute,private ds:DataService){
    // alert("dfjaskh")
    this.ar.params.subscribe((res:any)=>{
      // console.log(res)
      this.pro=this.ds.fetchPro(res.id).then(res=>res.json()).then((data:any)=>{this.pro=data})
    }
      )
  }
  

}
