import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
   // console.log(id);
   // return this.http.get('${this.baseUrl}/${id}');
   return this.http.get(`http://localhost:8080/api/employees/${id}`);
  }
  checkEmployee(id: number,pass:any): Observable<any> {
    // console.log(id);
    // return this.http.get('${this.baseUrl}/${id}');
    return this.http.get(`http://localhost:8080/api/employees/${id}/${pass}`,{responseType:'text'});
   }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
