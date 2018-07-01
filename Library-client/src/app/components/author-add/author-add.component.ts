import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AuthorService} from '../../services/author-service/author.service';
import {Author} from '../../model/author';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  constructor(
    private authorService: AuthorService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  addAuthor(name: string, birthday: number, deathday: number) {
    const newAuthor: Author = {id: 0, name: name, birthday: birthday, deathday: deathday};
    this.authorService.addAuthor(newAuthor).subscribe(() => this.goBack());
  }
}
