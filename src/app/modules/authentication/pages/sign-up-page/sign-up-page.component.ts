import { Component, OnInit } from '@angular/core';
import { UserSignUpDto } from '@core/dto/user-signup.dto';
import { AuthenticationService } from '@authentication/services';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  user = new UserSignUpDto();
  error: string = '';

  constructor(private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void { }

  submitted = false;

  onSubmit() {
    this.authenticationService.signUp(this.user).subscribe({
      next: (v: any) => {
        this.localStorageService.token = v.data.authToken;
        this.localStorageService.user = v.data.user;
      },
      error: (e: any) => {this.error = e.error.messages },
      complete:() => {this.router.navigate(['/']);}
    })
  }
}
