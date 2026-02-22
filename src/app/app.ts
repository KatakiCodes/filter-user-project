import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { IUser } from './interfaces/user/user.interface';
import { UserDataList } from './data/user-data-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('filter-user-project');
  userSelected: IUser = {} as IUser;
  userList:IUser[] = UserDataList;
  showDetails: boolean = false;

  onSelectUser(user:IUser){
    this.userSelected = user;
    this.showDetails = true;
  }
}
