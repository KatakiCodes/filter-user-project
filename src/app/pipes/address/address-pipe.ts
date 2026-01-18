import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const IS_INVALID:boolean = 
    !address ||
    !address.cidade ||
    !address.estado ||
    !address.pais ||
    !address.rua ||
    !address.numero === null || !address.numero === undefined;

    if(IS_INVALID)
      return "Endereço indisponível ou inválido.";
    return `${address.pais}, ${address.estado},${address.cidade},${address.rua},${address.numero}`;
  }

}
