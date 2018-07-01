package com.aandreww.server.service;

import com.aandreww.server.entity.Author;
import com.aandreww.server.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("authorService")
public class AuthorService {

    private AuthorRepository authorRepository;

    @Autowired
    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public List<Author> findAll(){
        List<Author> list = new ArrayList<>();
        authorRepository.findAll().forEach(e->list.add(e));

        return list;
    }

    public Author findAuthorByName(String name){
        return authorRepository.findAuthorByName(name);
    }

    public Author findAuthorById(Integer id){
        return authorRepository.findAuthorById(id);
    }

    public void save(Author author){
        authorRepository.save(author);
    }

    public long count(){
        return authorRepository.count();
    }
}
