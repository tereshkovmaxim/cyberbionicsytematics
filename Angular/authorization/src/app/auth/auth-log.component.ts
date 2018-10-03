import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-log',
  templateUrl: './auth-log.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthLogComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      'login': ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      'password': ['', Validators.required]
    });
  }

  onChange(el) {
    el.classList = 'active';
    if (el.nextSibling.value === '') {
      el.classList = '';
    }
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const pass = localStorage.getItem(this.formLogin.controls.login.value);
      if (this.formLogin.controls.password.value === pass) {
        console.log(localStorage.getItem(this.formLogin.controls.login.value.toUpperCase()));
        alert('Login');
      }
    }
  }

}
