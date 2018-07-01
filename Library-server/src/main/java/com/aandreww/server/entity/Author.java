package com.aandreww.server.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "author")
public class Author {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "birthday")
    private Integer birthday;

    @Column(name = "deathday")
    private Integer deathday;

    @ManyToMany
    @JoinTable(
            name = "auth_book",
            joinColumns = @JoinColumn(name = "auth_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private List<Book> books;

    public Author(int id, String name, Integer birthday, Integer deathday, List<Book> books) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.deathday = deathday;
        this.books = books;
    }

    public Author() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getBirthday() {
        return birthday;
    }

    public void setBirthday(Integer birthday) {
        this.birthday = birthday;
    }

    public Integer getDeathday() {
        return deathday;
    }

    public void setDeathday(Integer deathday) {
        this.deathday = deathday;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    @Override
    public String toString() {
        return "Author: " + this.name + " (" + this.birthday + ", " + this.deathday + ")";
    }
}
