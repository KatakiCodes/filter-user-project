import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone:string): string {
    const INVALID_PHONE:boolean = (!phone || phone.length < 9 || phone.length > 12);
    const HAS_PREFIX_NUMBER:boolean = (phone.length == 12);
  
    if (INVALID_PHONE)
      return "Contacto inválido ou indisponível";
    if(HAS_PREFIX_NUMBER)
      return `(${phone.substring(0,3)})-${phone.substring(3,6)}-${phone.substring(6,9)}-${phone.substring(9,11)}`;
    else
      return `${phone.substring(0,3)}-${phone.substring(3,6)}-${phone.substring(6,9)}`;


  }

}
