import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmpass: string = '';
  constructor() {}

  ngOnInit(): void {}

  submitted = false;

  onSubmit() {
    console.log('ok');
  }
}
