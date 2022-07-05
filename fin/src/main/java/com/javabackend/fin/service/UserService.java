package com.javabackend.fin.service;
import com.javabackend.fin.models.User;

import java.util.Collection;
import java.util.List;

import com.javabackend.fin.models.UserLite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {

    @Autowired
    private UserReadRepository userReadRepository;

    @Autowired
    private UserWriteRepository userWriteRepository;


    public Collection<UserLite> findUserByID(Long userID) {
        return userReadRepository.findAllUsersByUserID(userID);
    }

    public List<UserLite> findAllUsers() {
        return (List<UserLite>) userReadRepository.findAll();
    }

    public List<User> findAllUsersIncludingPasswords(){
        return (List<User>) userWriteRepository.findAll();
    }

    public User addNewUser(User newUser) {
        return userWriteRepository.save(newUser);
    }





}
