import { Injectable } from '@angular/core';
import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public get token(){
    return localStorage.getItem('token');
  }
  public set token(token: string | null){
    localStorage.setItem('token', token || '');
  }

  public get user(): User{
    return JSON.parse(localStorage.getItem('user')|| '');
  }
  public set user(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public get id(): number{
    return parseInt(localStorage.getItem('user.id')|| '');
  }

  public isLoggedIn(): boolean{
    const tkn = localStorage.getItem('token');
    if(tkn === '' || tkn === null)
      return false;
    else return true;
  }

  public logOut(){
    console.log('logged out')
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
  }

}
