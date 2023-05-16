import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.css']
})
export class NewProComponent {

  ProductForm=this.fb.group(
    {
      title:['',[Validators.required,Validators.pattern("[a-zA-Z ]+")]],
      category:['',[Validators.required,Validators.pattern("[a-zA-Z ]+")]],
      desc:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
      rarting:['',[Validators.required,Validators.pattern("[1-5]")]],
      price:['',[Validators.required,Validators.pattern("[0-9]+")]]
    }
  )

  constructor(private fb:FormBuilder){}

  clicked(){
    if (this.ProductForm.valid){
      console.log(this.ProductForm.value)
      console.log(this.ProductForm.value.title)
  }
  else{
    alert("invalid data")
    if (this.ProductForm.get('title')?.invalid){
      alert("Title is invalid")
    }
    if (this.ProductForm.get('category')?.invalid){
      alert("Category is invalid")
    }
    if (this.ProductForm.get('desc')?.invalid){
      alert("Description is invalid")
    }
    if (this.ProductForm.get('rating')?.invalid){
      alert("Rating is invalid")
    }
    if (this.ProductForm.get('price')?.invalid){
      alert("price is invalid")
    }
  }
}
}
