package com.javabackend.fin.controller;

import com.javabackend.fin.models.User;
import com.javabackend.fin.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

@RestController
public class UserController {

    @Inject
    private UserService userService;

    //Shows users from user table in database
    @GetMapping(path = "/users", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:8080/users")
    public List<User> findUsers(Model model) {
        var users = (List<User>) userService.findAllUsers();
        model.addAttribute("users", users);
        return users;
    }

    @GetMapping("/users/currentUser")
    public User findCurrentUser(Model model) {
        var user = (User) userService.findCurrentUser();
        model.addAttribute("user", user);
        return user;
    }

    //Adds a user to the database
    @PostMapping("/addUser")
    User newUser(@RequestBody User newUser) {
        return userService.addNewUser(newUser);
    }

}