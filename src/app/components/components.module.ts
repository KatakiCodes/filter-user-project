import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetails } from "./user-details/user-details";

@NgModule({
  declarations: [],
  imports: [AngularMaterialModule, UserDetails],
  exports: [AngularMaterialModule, UserDetails]
})
export class ComponentsModule {}