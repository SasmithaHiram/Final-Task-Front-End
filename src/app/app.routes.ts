import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'employee', component: EmployeeComponent },
      { path: 'test', component: TestComponent },
    ],
  },
];
