package com.javabackend.fin.models;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Users")
@XmlRootElement(name = "User")
public class UserLite {

    @Id
    @Column(name = "user_id", nullable = false, updatable = false, length = 32)
    private String user_id;

    @Column(name = "full_name", nullable = false)
    private String full_name;
    @Column(name = "email", nullable = false)
    private String email;

    public String getUser_id() {
        return user_id;
    }

    public String getFullName() {
        return full_name;
    }

    public String getEmail() {
        return email;
    }
}
