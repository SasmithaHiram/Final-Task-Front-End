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
export class EmployeeComponent {
  
}
