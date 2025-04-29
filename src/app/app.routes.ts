import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './page/customer/customer.component';

export const routes: Routes = [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'customers', component: CustomerComponent },
        ],
      },
];
