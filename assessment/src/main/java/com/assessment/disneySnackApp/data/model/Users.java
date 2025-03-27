package com.assessment.disneySnackApp.data.model;

import jakarta.persistence.*;

import java.util.StringJoiner;


@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int usersId;
    String usersName;
    String email;
    String passwordHash;

    @Enumerated(EnumType.STRING)
    public Role role;

    public Users(Role role) {
    }

    public enum Role {
        USER,
        ADMIN;
    }

    public Users() {
    }

    public Users(int usersId, String usersName, String email, String passwordHash, Role role) {
        this.usersId = usersId;
        this.usersName = usersName;
        this.email = email;
        this.passwordHash = passwordHash;
        this.role = role;
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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Users.class.getSimpleName() + "[", "]")
                .add("usersId=" + usersId)
                .add("usersName='" + usersName + "'")
                .add("email='" + email + "'")
                .add("passwordHash='" + passwordHash + "'")
                .add("role=" + role)
                .toString();
    }
}
