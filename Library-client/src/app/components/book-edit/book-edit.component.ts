///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';

import {Location} from '@angular/common';

import {Book} from '../../model/book';
import {BookService} from '../../services/book-service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private bookService: BookService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }

  goBack() {
    this.location.back();
  }

  editBook() {
    this.bookService.editBook(this.book).subscribe(() => this.goBack());
  }

}
