import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@authentication/services';
import { LoginUserDto } from '@core/dto/login-user.dto';
import { LocalStorageService } from '@core/services/local-storage.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
})
export class LogInPageComponent implements OnInit {
  user = new LoginUserDto();
  error = ''
  constructor(private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authenticationService.logIn(this.user).subscribe({
      next: (v: any) => {
        this.localStorageService.token = v.data.authToken;
        this.localStorageService.user = v.data.user;
      },
      error: (e: any) => {this.error = e.error.messages }
  })
  }
}
