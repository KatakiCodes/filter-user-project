import { Component, EventEmitter, Output } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { UserDataList } from '../../data/user-data-list';
import { MatTableDataSource, MatColumnDef } from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'app-user-list',
  imports: [AngularMaterialModule, MatColumnDef, PipesModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  dataSource = new MatTableDataSource(UserDataList);
  displayedColumns: string[] = ['nome', 'dataCadastro', 'ativo'];
  @Output('userSelected') onUserSelected = new EventEmitter<IUser>();

  onSelectUser(user: IUser) {
    this.onUserSelected.emit(user);
  }
}
