import { Component } from '@angular/core';
import { Employee } from '../../model/Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee: Employee = new Employee("", "", "", 0);

  addEmployee() {

  }

}
