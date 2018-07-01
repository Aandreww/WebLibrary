package com.aandreww.server.controller;

import com.aandreww.server.entity.Author;
import com.aandreww.server.entity.Book;
import com.aandreww.server.model.AuthorJSON;
import com.aandreww.server.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AuthorController {

    private AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping(value = "/authors")
    public Collection<AuthorJSON> getAllAuthors() {
        return change(authorService.findAll());
    }

    @GetMapping(value = "/author/{id}")
    public AuthorJSON getAuthorById(@PathVariable("id") int id) {
        Author author = this.authorService.findAuthorById(id);

        return change(author);
    }

    @PostMapping("/author")
    public AuthorJSON addAuthor(@Valid @RequestBody AuthorJSON author){
        Author newAuthor = new Author();

        newAuthor.setId((int) authorService.count()+1);
        newAuthor.setName(author.getName());
        newAuthor.setBirthday(author.getBirthday());
        newAuthor.setDeathday(author.getDeathday());

        authorService.save(newAuthor);

        return change(newAuthor);
    }

    @PutMapping("/author")
    public AuthorJSON editAuthor(@Valid @RequestBody AuthorJSON author){
        Author newAuthor = new Author();

        newAuthor.setId(author.getId());
        newAuthor.setName(author.getName());
        newAuthor.setBirthday(author.getBirthday());
        newAuthor.setDeathday(author.getDeathday());

        newAuthor.setBooks(authorService.findAuthorById(author.getId()).getBooks());

        authorService.save(newAuthor);

        return change(newAuthor);
    }

    private Collection<AuthorJSON> change(List<Author> authors1) {
        Collection<AuthorJSON> authors = new ArrayList<>();
        for(Author author: authors1){
            AuthorJSON author1 = new AuthorJSON();
            author1.setId(author.getId());
            author1.setName(author.getName());
            author1.setBirthday(author.getBirthday());
            author1.setDeathday(author.getDeathday());
            authors.add(author1);
        }
        return authors;
    }

    private AuthorJSON change(Author author) {
        AuthorJSON author1 = new AuthorJSON();
        author1.setId(author.getId());
        author1.setName(author.getName());
        author1.setBirthday(author.getBirthday());
        author1.setDeathday(author.getDeathday());

        return author1;
    }

}
