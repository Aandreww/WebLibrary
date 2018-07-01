package com.aandreww.server.service;

import com.aandreww.server.entity.Book;
import com.aandreww.server.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("bookService")
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> findAll(){
        List<Book> list = new ArrayList<>();
        bookRepository.findAll().forEach(e->list.add(e));
        return list;
    }

    public Book findByYear(int year){
        return bookRepository.findByYear(year);
    }

    public long count(){
        return bookRepository.count();
    }

    public Book findById(Integer id){
        return bookRepository.findById(id);
    }

    public void save(Book book){
        bookRepository.save(book);
    }

}
