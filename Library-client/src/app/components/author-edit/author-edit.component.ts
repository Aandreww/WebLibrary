import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AuthorService} from '../../services/author-service/author.service';
import {Author} from '../../model/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  @Input() author: Author;

  constructor(
    private authorService: AuthorService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthorById(id).subscribe(author => this.author = author);
  }

  goBack() {
    this.location.back();
  }

  editAuthor() {
    this.authorService.editAuthor(this.author).subscribe(() => this.goBack());
  }

}
