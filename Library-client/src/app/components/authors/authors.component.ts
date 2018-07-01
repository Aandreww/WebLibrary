import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../services/author-service/author.service';
import {Author} from '../../model/author';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[];

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe( authors => this.authors = authors);
  }

  addBook(authorId: number) {
    this.router.navigate(['/book/add/' + authorId]);
  }

  addAuthor() {
    this.router.navigate(['/author/add']);
  }

  editAuthor(id: number) {
    this.router.navigate(['/author/edit/' + id]);
  }
}
