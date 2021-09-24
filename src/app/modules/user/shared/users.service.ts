import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  url: string = 'http://localhost:3700/users';

  constructor(private http: HttpClient) { }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}`, user);
  }


}
