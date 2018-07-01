package com.aandreww.server.repository;

import com.aandreww.server.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("bookRepository")
public interface BookRepository extends CrudRepository<Book, Long>{

    Iterable<Book> findAll();

    Book findByYear(int year);

    Book findById(Integer id);

    long count();

}
