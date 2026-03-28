import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { IUser } from './interfaces/user/user.interface';
import { UserDataList } from './data/user-data-list';
import { FilterUserInterface } from './interfaces/filter-user.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('filter-user-project');
  userSelected: IUser = {} as IUser;
  userList: IUser[] = [];
  filteredUserList: IUser[] = [];
  showDetails: boolean = false;

  ngOnInit(): void {
    this.userList = UserDataList;
    this.filteredUserList = this.userList;
  }

  onSelectUser(user: IUser) {
    this.userSelected = user;
    this.showDetails = true;
  }

  onFilter(event: FilterUserInterface) {
    this.filteredUserList = this.filterUserList(event, this.userList);
  }

  filterUserList(filter: FilterUserInterface, userList: IUser[]) {
    let filteredList = this.filterUserByName(filter.name as string, userList);
    return filteredList;
  }

  filterUserByName(name: string, userList: IUser[]): IUser[] {
    name = name.trim();
    let IS_NAME_NOT_TYPED: boolean = (name === undefined || name === '');
    if (IS_NAME_NOT_TYPED)
      return userList;
    return userList.filter(user => user.nome.toLowerCase().includes(name.toLowerCase()));
  }
}
