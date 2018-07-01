package com.aandreww.server.controller;

import com.aandreww.server.entity.Author;
import com.aandreww.server.entity.Book;
import com.aandreww.server.entity.User;
import com.aandreww.server.model.BookJSON;
import com.aandreww.server.service.AuthorService;
import com.aandreww.server.service.BookService;
import com.aandreww.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class BookController {

    private BookService bookService;
    private UserService userService;
    private AuthorService authorService;

    @Autowired
    public BookController(BookService bookService, UserService userService, AuthorService authorService) {
        this.bookService = bookService;
        this.userService = userService;
        this.authorService = authorService;
    }

    @GetMapping(value = "/books")
    public Collection<BookJSON> getAllBooks() {
        return change(bookService.findAll());
    }

    @GetMapping(value = "/bookOfUser/{username}")
    public Collection<BookJSON> getBooksOfUser(@PathVariable("username") String username) {
        List<Book> books = userService.findByUserName(username).getBooks();

        return change(books);
    }

    @GetMapping(value = "/book/{id}")
    public BookJSON getBookById(@PathVariable("id") int id) {
        Book book = bookService.findById(id);

        return change(book);
    }

    @PostMapping("/book")
    public BookJSON addBook(@Valid @RequestBody BookJSON book){
        Book newBook = new Book();

        newBook.setId((int) bookService.count() + 1);
        newBook.setTitle(book.getTitle());
        newBook.setGenre(book.getGenre());
        newBook.setYear(book.getYear());
        List<Author> authors = new ArrayList<>();
        authors.add(authorService.findAuthorById(book.getAuthorId()));
        newBook.setAuthors(authors);

        bookService.save(newBook);

        return change(newBook);
    }

    @PutMapping("/book")
    public BookJSON editBook(@Valid @RequestBody BookJSON book){
        Book newBook = new Book();

        newBook.setId(book.getId());
        newBook.setTitle(book.getTitle());
        newBook.setGenre(book.getGenre());
        newBook.setYear(book.getYear());

        List<Author> authors = new ArrayList<>();
        authors.add(authorService.findAuthorById(book.getAuthorId()));
        newBook.setAuthors(authors);

        newBook.setUsers(bookService.findById(book.getId()).getUsers());

        bookService.save(newBook);

        return change(newBook);
    }

    @DeleteMapping("/book/{bookId}")
    public BookJSON deleteBook(@PathVariable("bookId") int bookId) {
        return change(this.bookService.findById(bookId));
    }

    private Collection<BookJSON> change(List<Book> books1) {
        Collection<BookJSON> books = new ArrayList<>();
        for(Book book: books1){
            BookJSON book1 = new BookJSON();
            book1.setId(book.getId());
            book1.setGenre(book.getGenre());
            book1.setTitle(book.getTitle());
            book1.setYear(book.getYear());
            book1.setAuthorId(book.getAuthors().get(0).getId());
            books.add(book1);
        }
        return books;
    }

    private BookJSON change(Book book) {

        BookJSON book1 = new BookJSON();
        book1.setId(book.getId());
        book1.setGenre(book.getGenre());
        book1.setTitle(book.getTitle());
        book1.setYear(book.getYear());
        book1.setAuthorId(book.getAuthors().get(0).getId());

        return book1;
    }

}
