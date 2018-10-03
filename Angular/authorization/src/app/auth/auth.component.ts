import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { NgModel} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnChanges {

  @ViewChild('sign')
  signR: ElementRef;
  @ViewChild('login')
  loginR: ElementRef;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signR.nativeElement.checked = true;
  }

  ngOnChanges() {
  }

  onChange() {
  }

}
