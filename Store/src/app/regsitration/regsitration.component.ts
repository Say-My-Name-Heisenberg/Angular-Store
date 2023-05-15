import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-regsitration',
  templateUrl: './regsitration.component.html',
  styleUrls: ['./regsitration.component.css']
})
export class RegsitrationComponent {

  UserForm=this.fb.group(
    {
      first_name:'',
      last_name:'',
      username:'',
      phone:'',
      email:''
    }
  )

  constructor(private fb:FormBuilder){}

  clicked(){
    console.log(this.UserForm.value)
    console.log(this.UserForm.value.username)
  }
}
