import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../service/EmployeeService';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    this.loadEmployeesTable();
  }
  employee: Employee = new Employee('', '', '');

  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService
  ) {}

  addEmployee() {
    if (this.employee.name && this.employee.email && this.employee.department) {
      this.employeeService.addNewEmployee(this.employee).subscribe(() => {
        this.resetForm();
        this.loadEmployeesTable();
      });
    } else {
      alert('PLEASE FILL OUT ALL REQUIRED FIELDS');
      this.resetForm();
    }
    this.resetForm();
    this.loadEmployeesTable();
  }

  private resetForm() {
    this.employee = new Employee('', '', '');
    this.isEditMode = false;
    this.selectedEmployeeId = null;
  }

  isEditMode: boolean = false;
  selectedEmployeeId: number | null = null;

  editEmployee(employee: Employee) {
    this.isEditMode = true;
    this.selectedEmployeeId = employee.id as number;
    this.employee = { ...employee };
    this.loadEmployeesTable();
  }

  cancelEdit() {
    this.resetForm();
  }

  deleteCustomer(id?: number) {
    if (!id) return;

    if (confirm('ARE YOU SURE YOU WANT TO DELETE THIS CUSTOMER?')) {
      this.employeeService.deleteEmployee(id.toString()).subscribe(() => {
        this.loadEmployeesTable()
      });
    }
  }

  employeeList: Employee[] = [];

  loadEmployeesTable() {
    this.employeeService
      .loadEmployee()
      .subscribe((employeeList: Employee[]) => {
        this.employeeList = employeeList;
      });
  }
}
