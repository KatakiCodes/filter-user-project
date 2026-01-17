import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone/phone-pipe";
@NgModule({
  declarations: [],
  imports: [PhonePipe],
  exports: [PhonePipe],
})
export class PipesModule {}