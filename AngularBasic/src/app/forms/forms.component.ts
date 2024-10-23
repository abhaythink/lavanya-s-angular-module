import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  sData:any={}
  getData="UserDetails";
  title="Register here";
  display=false
  getFormDetails(data:NgForm){
    console.log(data);
    this.sData=data;
  }

  toggle(){
    this.display=!this.display;

  }
}
