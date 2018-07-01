package com.aandreww.server.controller;

import com.aandreww.server.entity.Book;
import com.aandreww.server.entity.User;
import com.aandreww.server.model.UserJSON;
import com.aandreww.server.service.BookService;
import com.aandreww.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin({"*", "http://localhost:4200/books"})
@RequestMapping("/api")
public class UserController {

    private UserService userService;
    private BookService bookService;

    @Autowired
    public UserController(UserService userService, BookService bookService) {
        this.userService = userService;
        this.bookService = bookService;
    }

    @GetMapping(value = "/users")
    public Collection<UserJSON> getAllUsers() {
        return change(userService.findAll());
    }

    @GetMapping(value = "/user/{id}")
    public UserJSON getUserById(@PathVariable("id")int id) {
        return change(userService.findById(id));
    }

    @PostMapping("/user")
    public UserJSON addUser(@Valid @RequestBody UserJSON user){
        System.out.println("----");
        User newUser = new User();

        System.out.println(user.getUsername() + ' ' + user.getUsername());

        newUser.setEnabled(false);
        newUser.setId((int)(userService.count() + 1));
        newUser.setUserName(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setRole("ROLE_USER");
        newUser.setEnabled(true);

        userService.saveUser(newUser);

        System.out.println("Register user: " + newUser.getId() + " " + newUser.getUserName());

        return change(newUser);
    }

    @PostMapping("/user/{userId}/addBook/{bookId}")
    public UserJSON addBookToUser(@PathVariable("userId")int userId, @PathVariable("bookId")int bookId){

        User user = userService.findById(userId);

        for (Book book:user.getBooks()){
            if (book.getId() == bookId){
                return change(user);
            }
        }

        List<Book> newBooks = new ArrayList<>();
        user.getBooks().forEach(e->newBooks.add(e));

        newBooks.add(bookService.findById(bookId));

        user.setBooks(newBooks);

        userService.saveUser(user);

        return change(user);
    }

    @PostMapping("/user/{userId}/returnBook/{bookId}")
    public UserJSON returnBook(@PathVariable("userId")int userId, @PathVariable("bookId")int bookId){

        User user = userService.findById(userId);
        List<Book> books = user.getBooks();
        List<Book> newBooks = new ArrayList<>();

        for (Book book:books){
            if (book.getId() == bookId){

            }else {
                newBooks.add(book);
            }
        }

        user.setBooks(newBooks);

        userService.saveUser(user);

        return change(user);
    }

    @PutMapping("/user")
    public UserJSON editUser(@Valid @RequestBody UserJSON user){
        User editedUser = this.userService.findById(user.getId());

        editedUser.setRole(user.getRole());

        userService.saveUser(editedUser);

        return change(editedUser);
    }

    private Collection<UserJSON> change(List<User> users1) {
        Collection<UserJSON> users = new ArrayList<>();
        for(User user: users1){
            UserJSON user1 = new UserJSON();
            user1.setId(user.getId());
            user1.setUsername(user.getUserName());
            user1.setPassword(user.getPassword());
            user1.setRole(user.getRole());
            users.add(user1);
        }
        return users;
    }

    private UserJSON change(User user1) {
        UserJSON user = new UserJSON();
        user.setId(user1.getId());
        user.setUsername(user1.getUserName());
        user.setPassword(user1.getPassword());
        user.setRole(user1.getRole());

        return user;
    }

}
