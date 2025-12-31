import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';;


@Component({
  selector: 'app-filter',
  imports: [AngularMaterialModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  selected:boolean = false;
}
