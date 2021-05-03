package com.javabackend.fin.service;
import com.fasterxml.jackson.annotation.JacksonInject;
import com.javabackend.fin.models.User;
import com.javabackend.fin.repository.UserRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {

    @Autowired
    private UserRepository repository;

    public List<User> findAllUsers() {
        return (List<User>) repository.findAll();
    }

    public User findCurrentUser() {
        return repository.findById((long) 1).orElse(null);
    }
}
