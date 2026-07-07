package com.javabackend.fin.models;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.UUID;

@Entity
@Table(name = "Users")
@XmlRootElement(name = "User")
public class User {

    @Id
    @Column(name = "user_id", nullable=false, updatable=false, length=32)
    private String user_id;

    @Column(name="full_name", nullable=false)
    private String full_name;
    @Column(name="email", nullable=false)
    private String email;
    @Column(name="password", nullable=false)
    private String password;

    @PrePersist
    private void ensureUserId() {
        if (user_id == null || user_id.isBlank()) {
            user_id = UUID.randomUUID().toString().replace("-", "");
        }
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getFullName() {
        return full_name;
    }

    public void setFullName(String full_name) {
        this.full_name = full_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
