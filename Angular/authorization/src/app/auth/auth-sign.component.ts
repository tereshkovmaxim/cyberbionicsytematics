import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-sign',
  templateUrl: './auth-sign.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthSignComponent implements OnInit {

  formSign: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formSign = formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      'password': ['', [Validators.required,
                        Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}')]]
    });
   }

  ngOnInit() {
  }

  onChange(el) {
    el.classList = 'active';
    if (el.nextSibling.value === '') {
      el.classList = '';
    }
  }

  onSubmit() {
    console.log(this.formSign);
    localStorage.setItem(this.formSign.controls.email.value, this.formSign.controls.password.value);
  }

}
