import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserDto } from '@authentication/dto';
import { AuthenticationService } from '@authentication/services';
import { LocalStorageService } from '@core/services';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  user = new LoginUserDto();
  error = '';
  constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authenticationService.logIn(this.user).subscribe({
      next: (v: any) => {
        this.localStorageService.token = v.data.authToken;
        this.localStorageService.user = v.data.user;
      },
      error: (e: any) => {
        this.error = e.error.messages;
      },
      complete: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
