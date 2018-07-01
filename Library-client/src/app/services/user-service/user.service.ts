import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {User} from '../../model/user';
import {catchError} from 'rxjs/operators';
import {Book} from '../../model/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private currentUser: User;
  private isUserLogged;

  constructor(private http: HttpClient) {
    this.isUserLogged = false;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.isUserLogged = true;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setUserLoggedIn(chek: boolean) {
    this.isUserLogged = chek;
  }

  getUserLoggedIn() {
    return this.isUserLogged;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:80/api/users').pipe(
      catchError(this.handleError<User[]>())
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:80/api/user/' + id).pipe(
      catchError(this.handleError<User>())
    );
  }

  registration(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:80/api/user', user, httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  addBookToUser(bookId: number): Observable<User> {
    return this.http.post<User>(`http://localhost:80/api/user/${this.getCurrentUser().id}/addBook/${bookId}`, httpOptions).pipe(
      catchError(this.handleError<User>())
    );
  }

  returnBook(bookId: number): Observable<User> {
    return this.http.post<User>(`http://localhost:80/api/user/${this.getCurrentUser().id}/returnBook/${bookId}`, httpOptions).pipe(
      catchError(this.handleError<User>())
    );
  }

  editUser(user: User): Observable<User> {
    return this.http.put('http://localhost:80/api/user', user, httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
