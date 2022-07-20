import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//add the right server direction
  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }    
  
  createUser(user: User): Observable<User>{
      return this.http.post<User>(`${this.BASE_URL}/user/create`, user);
  }

  updateUser(id: number, user:User){
    return this.http.patch<User>(`${this.BASE_URL}/user/update?id=${id}`, user);
  }

  deleteUser(id: number, user:User){
    return this.http.delete<User>(`${this.BASE_URL}/user/delete?id=${id}`);
  }
}
