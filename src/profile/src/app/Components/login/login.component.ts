import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  myScriptElement: HTMLScriptElement | undefined;
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder) {

  }

  ngAfterViewInit(): void{
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../assets/login-test.component.js"
    document.body.appendChild(this.myScriptElement);
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
