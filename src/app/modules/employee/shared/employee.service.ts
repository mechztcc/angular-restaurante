import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './types/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:3700/employees'
  
  constructor(private http: HttpClient) { }


  create(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.url}`, employee);
  }
}
