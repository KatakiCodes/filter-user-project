import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { UserDataList } from '../../data/user-data-list';
import { MatTableDataSource, MatColumnDef } from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  imports: [AngularMaterialModule, MatColumnDef],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  dataSource = new MatTableDataSource(UserDataList);
  displayedColumns: string[] = ['nome', 'dataCadastro', 'ativo'];

  onSelectUser(user: IUser) {
    console.log(user);
  }
}
