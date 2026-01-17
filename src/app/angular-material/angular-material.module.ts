import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import { MatDivider } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core'
import {MatSelectModule} from '@angular/material/select';
import { MatTable } from "@angular/material/table";
import { MatTableModule } from '@angular/material/table';



@NgModule({
  imports: [MatButtonModule, MatListModule, MatDivider, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule,MatTable],
  providers: [provideNativeDateAdapter()],
  exports: [MatButtonModule, MatListModule, MatDivider, MatInputModule, MatFormFieldModule,MatDatepickerModule, MatSelectModule, MatTable, MatTableModule],
})
export class AngularMaterialModule {}