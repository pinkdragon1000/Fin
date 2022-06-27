package com.javabackend.fin.controller;
import com.javabackend.fin.models.User;
import com.javabackend.fin.models.UserLite;
import com.javabackend.fin.service.UserService;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import javax.inject.Inject;
import java.util.*;

@RestController
public class UserController {

    @Inject
    private UserService userService;

    //Displays all user information for a specific userID
    @GetMapping(path = "/users", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    public Collection<UserLite> findUser(@RequestParam Long userID) {
            return userService.findUserByID(userID);
    }

    //Posts a new user to the database
    @PostMapping("/addUser")
    @CrossOrigin
    public User newUser(@RequestBody User newUser) {
        return userService.addNewUser(newUser);
    }
}