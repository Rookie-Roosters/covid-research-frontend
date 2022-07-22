import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSignUpDto } from '@core/dto/user-signup.dto';
import { LoginUserDto } from '@core/dto/login-user.dto';
import { Store } from '@core/models/store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
//add the right server address
  BASE_URL: string = 'http://localhost:3000'  

  constructor(private http: HttpClient) { }

  signUp(user: UserSignUpDto): Observable<Store>{
    return this.http.post<Store>(`${this.BASE_URL}/authentication/sign-up`, user);
  }

  logIn(user: LoginUserDto): Observable<Store>{
    return this.http.post<Store>(`${this.BASE_URL}/authentication/log-in`, user);
  }

}
