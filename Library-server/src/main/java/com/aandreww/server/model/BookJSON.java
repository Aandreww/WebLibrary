package com.aandreww.server.model;

public class BookJSON {

    private int id;

    private String title;

    private int year;

    private String genre;

    private int authorId;

    public BookJSON(int id, String title, int year, String genre, int authorId) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.authorId = authorId;
    }

    public BookJSON() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }
}
