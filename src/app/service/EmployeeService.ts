import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  addNewEmployee(employee: Omit<Employee, 'id'>): Observable<Employee> {
    return this.http.post<Employee>(
      'http://localhost:8080/employee/create',
      employee
    );
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `http://localhost:8080/employee/update/${id}`,
      employee
    );
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:8080/employee/delete/${id}`
    );
  }

  loadEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/employee/get-all');
  }
}
