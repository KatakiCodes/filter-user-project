import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone/phone-pipe";
import { AddressPipe } from "./address/address-pipe";
import { ActivePipe } from "./active/active-pipe";
import { DatePipe } from "@angular/common";
@NgModule({
  declarations: [],
  imports: [PhonePipe, AddressPipe, ActivePipe, DatePipe],
  exports: [PhonePipe, AddressPipe, ActivePipe,DatePipe],
})
export class PipesModule {}