import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../../model/user';
import {UserService} from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  roles: string[];

  user: User;

  constructor(
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.roles = ['User', 'Moder', 'Admin'];
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  goBack() {
    this.location.back();
  }

  save(e) {
    this.userService.editUser(this.user).subscribe(() => this.goBack());
  }

}
