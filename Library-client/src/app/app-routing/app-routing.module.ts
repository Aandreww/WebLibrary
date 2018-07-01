import { NgModule } from '@angular/core';
import {LoginFormComponent} from '../components/login-form/login-form.component';
import {AuthorsComponent} from '../components/authors/authors.component';
import {BooksComponent} from '../components/books/books.component';
import {MyBooksComponent} from '../components/my-books/my-books.component';
import {AuthorEditComponent} from '../components/author-edit/author-edit.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {BookAddComponent} from '../components/book-add/book-add.component';
import {LoginGuard} from '../guard/login.guard';
import {BookEditComponent} from '../components/book-edit/book-edit.component';
import {HomeComponent} from '../components/home/home.component';
import {AuthorAddComponent} from '../components/author-add/author-add.component';
import {UserEditComponent} from '../components/user-edit/user-edit.component';
import {UsersComponent} from '../components/users/users.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'book/add/:authorId',
    component: BookAddComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'myBooks',
    component: MyBooksComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'author/edit/:id',
    component: AuthorEditComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'author/add',
    component: AuthorAddComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
