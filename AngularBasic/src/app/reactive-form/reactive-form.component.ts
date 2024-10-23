import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  title="Reactive Form";

  loginForm = new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    mno: new FormControl ('', [Validators.required]),
    pwd:new FormControl('',[Validators.required,Validators.minLength(5)])


  })

  loginUser(){
    console.warn(this.loginForm.value)
  }

  get email(){
    return this.loginForm.get('email')
  }

  get mno(){
    return this.loginForm.get('mno')
  }

  get pwd(){
    return this.loginForm.get('pwd')
  }
}
