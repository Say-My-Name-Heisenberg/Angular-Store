import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.css']
})
export class NewProComponent {

  ProductForm=this.fb.group(
    {
      title:'',
      category:'',
      desc:'',
      rarting:'',
      price:''
    }
  )

  constructor(private fb:FormBuilder){}

  clicked(){
    console.log(this.ProductForm.value)
    console.log(this.ProductForm.value.title)
  }
}
