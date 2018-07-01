import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  registration(username: string, password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].username === username) {
          return;
        }
      }
      const user = {id: 0, username: username, password: password, role: ' '};
      this.userService.registration(user).subscribe();
      this.router.navigate(['/login']);
    }
  }
}
