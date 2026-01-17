import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetails } from "./user-details/user-details";
import { Filter } from "./filter/filter";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UserList } from "./user-list/user-list";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [],
  imports: [AngularMaterialModule, UserDetails, Filter, FormsModule, CommonModule, UserList, PipesModule],
  exports: [AngularMaterialModule, UserDetails, Filter, FormsModule, CommonModule, UserList, PipesModule]
})
export class ComponentsModule {}