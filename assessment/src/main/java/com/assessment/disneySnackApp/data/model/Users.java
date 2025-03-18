package com.assessment.disneySnackApp.data.model;

import jakarta.persistence.*;

import java.util.StringJoiner;


@Entity
@Table(name = "Users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int usersId;
    String usersName;
    String email;
    String passwordHash;
    public enum Role {
        USER,
        ADMIN;
    }

    public Users() {
    }

    public Users(int usersId, String usersName, String email, String passwordHash) {
        this.usersId = usersId;
        this.usersName = usersName;
        this.email = email;
        this.passwordHash = passwordHash;
    }

    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    public String getUsersName() {
        return usersName;
    }

    public void setUsersName(String usersName) {
        this.usersName = usersName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Users.class.getSimpleName() + "[", "]")
                .add("usersId=" + usersId)
                .add("usersName='" + usersName + "'")
                .add("email='" + email + "'")
                .add("passwordHash='" + passwordHash + "'")
                .toString();
    }
}
