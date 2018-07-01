package com.aandreww.server.repository;

import com.aandreww.server.entity.Author;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("authorRepository")
public interface AuthorRepository extends CrudRepository<Author, Long> {

    Iterable<Author> findAll();

    Author findAuthorByName(String name);

    Author findAuthorById(Integer id);

}
