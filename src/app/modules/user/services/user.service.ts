import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreateDto } from '@core/dto/user-create.dto';
import { User } from '@core/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //add the right server address
  BASE_URL: string = 'http://localhost:3000'  

  constructor(private http: HttpClient) { }

  createUser(user: UserCreateDto): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/users/`, user);
  }

  updateUser(id: number, user:User){
    return this.http.patch<User>(`${this.BASE_URL}/users/update?id=${id}`, user);
  }

  deleteUser(id: number, user:User){
    return this.http.delete<User>(`${this.BASE_URL}/users/delete?id=${id}`);
  }
}
