package com.aandreww.server.model;

public class AuthorJSON {

    private int id;

    private String name;

    private Integer birthday;

    private Integer deathday;

    public AuthorJSON(int id, String name, Integer birthday, Integer deathday) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.deathday = deathday;
    }

    public AuthorJSON() {
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
}
