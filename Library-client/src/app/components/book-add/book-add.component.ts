import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../services/book-service/book.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  addBook(title: string, genre: string, year: number) {
    const authorId = +this.route.snapshot.paramMap.get('authorId');
    const newBook: Book = {id: 0, title: title, year: year, genre: genre, authorId: authorId};
    console.log(newBook);
    this.bookService.addBook(newBook).subscribe(() => this.goBack());
  }

}
