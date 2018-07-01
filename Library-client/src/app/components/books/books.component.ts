///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book-service/book.service';
import {Book} from '../../model/book';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  user: User = this.userService.getCurrentUser();

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getAllBooks().subscribe(books => this.books = books);
  }

  logout() {
    this.userService.setUserLoggedIn(false);
  }

  editBook(id: number) {
    this.router.navigate(['/book/edit/' + id]);
  }

  addBookToUser(id: number) {
    this.userService.addBookToUser(id).subscribe();
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe();
  }

}
