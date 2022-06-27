package com.javabackend.fin.models;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Users")
@XmlRootElement(name = "User")
public class UserLite {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long user_id;

    @Column(name = "full_name", nullable = false)
    private String full_name;
    @Column(name = "email", nullable = false)
    private String email;

    public Long getUser_id() {
        return user_id;
    }

    public String getFullName() {
        return full_name;
    }

    public String getEmail() {
        return email;
    }
}