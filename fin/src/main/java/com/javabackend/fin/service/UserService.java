package com.javabackend.fin.service;
import com.javabackend.fin.models.User;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {

    @Autowired
    private UserRepository userRepository;

    public Collection<User> findUserByID(Long userID) {
        return userRepository.findAllUsersByUserID(userID);
    }

    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public User addNewUser(User newUser) {
        return userRepository.save(newUser);
    }


}
