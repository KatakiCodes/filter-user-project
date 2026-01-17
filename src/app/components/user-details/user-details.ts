import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  imports: [AngularMaterialModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  @Input( { required: true} ) user: IUser = { } as IUser;
}
