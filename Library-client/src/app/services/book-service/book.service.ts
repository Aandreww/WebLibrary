import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Book} from '../../model/book';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {User} from '../../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:80/api/books').pipe(
      catchError(this.handleError<Book[]>())
    );
  }

  getBooksOfUser(username: string): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:80/api/bookOfUser/' + username).pipe(
      catchError(this.handleError<Book[]>())
    );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:80/api/book/' + id).pipe(
      catchError(this.handleError<Book>())
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:80/api/book', book, httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  editBook(book: Book): Observable<any> {
    return this.http.put('http://localhost:80/api/book', book, httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  deleteBook(bookId: number): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:80/api/book/${bookId}`, httpOptions).pipe(
      catchError(this.handleError<Book>())
    );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}
