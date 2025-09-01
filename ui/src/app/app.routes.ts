import { Routes } from '@angular/router';
import { BookingsComponent } from '../app/components/bookings/bookings';

export const routes: Routes = [
  { path: 'bookings', component: BookingsComponent },
  { path: '', redirectTo: '/bookings', pathMatch: 'full' } // default goes to bookings
];
