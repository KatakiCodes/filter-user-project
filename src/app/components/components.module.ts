import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetails } from "./user-details/user-details";
import { Filter } from "./filter/filter";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UserList } from "./user-list/user-list";

@NgModule({
  declarations: [],
  imports: [AngularMaterialModule, UserDetails, Filter, FormsModule, CommonModule, UserList],
  exports: [AngularMaterialModule, UserDetails, Filter, FormsModule, CommonModule, UserList]
})
export class ComponentsModule {}