import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone/phone-pipe";
import { AddressPipe } from "./address/address-pipe";
import { ActivePipe } from "./active/active-pipe";
@NgModule({
  declarations: [],
  imports: [PhonePipe, AddressPipe, ActivePipe],
  exports: [PhonePipe, AddressPipe, ActivePipe],
})
export class PipesModule {}