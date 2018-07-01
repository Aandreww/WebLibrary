import { Component } from '@angular/core';
import {UserService} from './services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  constructor(private userService: UserService) {}

  loggedIn(): boolean {
    return this.userService.getUserLoggedIn();
  }

  userRole(): string {
    return this.userService.getCurrentUser().role;
  }

  logout(): void {
    this.userService.setUserLoggedIn(false);
    this.userService.setCurrentUser(null);
  }
}
