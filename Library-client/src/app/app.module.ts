import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import {BookService} from './services/book-service/book.service';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user-service/user.service';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import {LoginGuard} from './guard/login.guard';
import { HomeComponent } from './components/home/home.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { UsersComponent } from './components/users/users.component';
import {AuthorService} from './services/author-service/author.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { AuthorAddComponent } from './components/author-add/author-add.component';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    LoginFormComponent,
    HomeComponent,
    MyBooksComponent,
    AuthorsComponent,
    UsersComponent,
    RegistrationComponent,
    BookEditComponent,
    AuthorEditComponent,
    UserEditComponent,
    BookAddComponent,
    AuthorAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [BookService, UserService, LoginGuard, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
