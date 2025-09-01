import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, ToolbarModule, ButtonModule, TableModule, DialogModule, FormsModule, InputTextModule],
  templateUrl: './bookings.html',
  styleUrls: ['./bookings.scss']
})

export class BookingsComponent {
  showDialog:boolean = false;
  bookings = [
    { name: 'Amy', employeeId:'1023', date: '2025-09-01', time: '10:01 AM', designation: 'Senior Associate Proff' },
    { name: 'Tom', employeeId:'1024',  date: '2025-09-02', time: '02:32 PM', designation: 'Junior Associate Proff' },
    { name: 'Harry', employeeId:'1025', date: '2025-09-03', time: '06:45 AM', designation: 'Intern' },
    { name: 'Jim', employeeId:'1026', date: '2025-09-03', time: '06:42 PM', designation: 'Staff' },
    { name: 'Abd', employeeId:'1027', date: '2025-09-03', time: '06:42 PM', designation: 'Finance' },
    { name: 'Amy', employeeId:'1023', date: '2025-09-01', time: '10:01 AM', designation: 'Senior Associate Proff' },
    { name: 'Tom', employeeId:'1024',  date: '2025-09-02', time: '02:32 PM', designation: 'Junior Associate Proff' },
    { name: 'Harry', employeeId:'1025', date: '2025-09-03', time: '06:45 AM', designation: 'Intern' },
    { name: 'Jim', employeeId:'1026', date: '2025-09-03', time: '06:42 PM', designation: 'Staff' },
    { name: 'Abd', employeeId:'1027', date: '2025-09-03', time: '06:42 PM', designation: 'Finance' }
  ];
  onCreateNewBooking() {
    this.showDialog = true;
  }
}
