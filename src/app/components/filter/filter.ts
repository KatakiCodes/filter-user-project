import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FilterUserInterface } from '../../interfaces/filter-user.interface';



@Component({
  selector: 'app-filter',
  imports: [AngularMaterialModule, CommonModule, FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  
  selectedStatus: boolean | undefined = undefined;

  filter: FilterUserInterface = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  
  statusOptions = [
    { value: true, viewValue: 'Active' },
    { value: false, viewValue: 'Inactive' },
  ];

  onSubmit() {
    console.log('Filter submitted:', this.filter);
  }
}
