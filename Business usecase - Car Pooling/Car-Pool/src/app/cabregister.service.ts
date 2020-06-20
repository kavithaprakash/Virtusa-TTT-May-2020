import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CabregisterService {


  private baseUrl = 'http://localhost:8080/cab/details';

  constructor(private http: HttpClient) { }
 
  createEmployee(cab: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cab);
  }
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 // updateEmployee(id: number, value: any): Observable<Object> {
//    return this.http.put(`${this.baseUrl}/${id}`, value);
 // }

  requestCab(str:any): Observable<any> {
    //return this.http.get(`${this.baseUrl}/${str}`);
    console.log(str);
    return this.http.get(`http://localhost:8080/cab/details/${str}`);
  }
}
