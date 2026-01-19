import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone/phone-pipe";
import { AddressPipe } from "./address/address-pipe";
import { ActivePipe } from "./active/active-pipe";
import { DatePipe } from "@angular/common";
import { DashIfEmptyPipe } from "./dash-if-empty/dash-if-empty-pipe";
@NgModule({
  declarations: [],
  imports: [PhonePipe, AddressPipe, ActivePipe, DatePipe, DashIfEmptyPipe],
  exports: [PhonePipe, AddressPipe, ActivePipe,DatePipe,DashIfEmptyPipe],
})
export class PipesModule {}