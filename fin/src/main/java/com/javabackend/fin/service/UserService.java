package com.javabackend.fin.service;
import com.javabackend.fin.models.User;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public User findCurrentUser() {
        return userRepository.findById((long) 1).orElse(null);
    }

    public User addNewUser(User newUser) {
        return userRepository.save(newUser);
    }

}
