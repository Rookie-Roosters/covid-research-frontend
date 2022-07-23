import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookmarkDto } from '@core/dto/bookmark.dto';
import { Bookmark } from '@core/models/bookmark.model';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  //add the right server address
  BASE_URL: string = 'http://localhost:3000'  
  headers= new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: ''
    });
  
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) { 
      this.headers =
      this.headers.set('Authorization', 'Bearer '+ localStorageService.token||'')
    }

  createBookmark(bookmark: BookmarkDto): Observable<Bookmark>{
    console.log(this.headers)
    return this.http.post<Bookmark>(`${this.BASE_URL}/bookmarks/`, bookmark, {headers: this.headers});
  }

  findOne(id: number): Observable<Bookmark>{
    return this.http.get<Bookmark>(`${this.BASE_URL}/bookmarks/${id}`);
  }

  findAll(): Observable<Bookmark[]>{
    return this.http.get<Bookmark[]>(`${this.BASE_URL}/bookmarks/user`, {headers: this.headers});
  }

  updateBookmark(id: number, bookmark:BookmarkDto){
    return this.http.patch<Bookmark>(`${this.BASE_URL}/bookmarks/${id}`, {headers: this.headers});
  }

  deleteBookmark(id: number){
    return this.http.delete(`${this.BASE_URL}/bookmarks/${id}`, {headers: this.headers});
  }

  addResearch(bookmarkId: number, researchId: number){
    return this.http.post<Bookmark>(`${this.BASE_URL}/users/${bookmarkId}`, researchId, {headers: this.headers});
  }

  removeResearch(bookmarkId: number, researchId: number){ //?
    return this.http.delete<Bookmark>(`${this.BASE_URL}/users/${bookmarkId}`, {headers: this.headers, body:{"researchId": researchId}});
  }
}
