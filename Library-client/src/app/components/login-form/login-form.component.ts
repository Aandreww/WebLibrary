import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../services/user-service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
    this.userService.setCurrentUser(null);
    this.userService.setUserLoggedIn(false);
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  loginUser(e) {
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        this.userService.setCurrentUser(this.users[i]);
        console.log(this.userService.getCurrentUser());
        this.router.navigate(['/home']);
      }
    }
    return true;
  }

}
