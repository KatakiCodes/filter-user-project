import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { MatTableDataSource, MatColumnDef } from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { PipesModule } from '../../pipes/pipes.module';
import { UserDataList } from '../../data/user-data-list';

@Component({
  selector: 'app-user-list',
  imports: [AngularMaterialModule, MatColumnDef, PipesModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  @Input({required:true}) userList:IUser[] = UserDataList;
  dataSource = new MatTableDataSource(this.userList);
  displayedColumns: string[] = ['nome', 'dataCadastro', 'ativo'];
  @Output('userSelected') onUserSelected = new EventEmitter<IUser>();

  onSelectUser(user: IUser) {
    this.onUserSelected.emit(user);
  }
}
