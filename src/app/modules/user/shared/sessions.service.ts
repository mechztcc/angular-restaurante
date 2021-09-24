import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {


  url: string = 'http://localhost:3700/sessions';

  constructor(private http: HttpClient) { }

  createSession(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}`, user);
  }
}
