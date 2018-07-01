import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  editUser(id: number) {

    this.router.navigate(['/user/edit/' + id]);
  }

}
