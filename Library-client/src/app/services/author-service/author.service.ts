import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';

import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

import {Author} from '../../model/author';
import {Book} from '../../model/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:80/api/authors').pipe(
      catchError(this.handleError<Author[]>())
    );
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>('http://localhost:80/api/author/' + id).pipe(
      catchError(this.handleError<Author>())
    );
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>('http://localhost:80/api/author', author, httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  editAuthor(author: Author): Observable<any> {
    return this.http.put('http://localhost:80/api/author', author, httpOptions).pipe(
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
