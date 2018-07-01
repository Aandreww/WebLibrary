import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book-service/book.service';
import {Book} from '../../model/book';
import {UserService} from '../../services/user-service/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getMyBooks();
  }

  getMyBooks(): void {
    this.bookService.getBooksOfUser(this.userService.getCurrentUser().username).subscribe(books => this.books = books);
  }

  returnBook(returnedBook: Book): void {
    this.books = this.books.filter((book => book !== returnedBook));

    this.userService.returnBook(returnedBook.id).subscribe();
  }


}
