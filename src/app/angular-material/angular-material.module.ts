import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import { MatDivider } from "@angular/material/list";



@NgModule({
  imports: [MatButtonModule, MatListModule, MatDivider],
  exports: [MatButtonModule, MatListModule, MatDivider],
})
export class AngularMaterialModule {}