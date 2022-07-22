import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = [
    {
      name: 'user01',
      email: 'user01@gmail.com',
      password: 'pass01',
    },
    {
      name: 'user02',
      email: 'user02@gmail.com',
      password: 'pass02',
    },
    {
      name: 'user03',
      email: 'user03@gmail.com',
      password: 'pass03',
    },
    {
      name: 'user04',
      email: 'user04@gmail.com',
      password: 'pass04',
    },
  ];

  constructor() { }
  
  registerForm = new FormGroup({
    name: new FormControl<string | null>('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl<string | null>('',Validators.required),
    password2: new FormControl<string | null>('',Validators.required),
    

  })

  ngOnInit(): void {
  }
  //Template driven form
  onSubmit(form:NgForm){
    console.log(form);
    this.register.push({
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    })
    form.reset();
  }
  //Reactive form
  onSubmit2(){
    console.log(this.registerForm);
    this.register.push({
      name: this.registerForm.value.name!,
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!,
    })
    this.registerForm.reset();
  }
}
