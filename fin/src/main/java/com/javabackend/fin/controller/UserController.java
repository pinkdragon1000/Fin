package com.javabackend.fin.controller;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.User;
import com.javabackend.fin.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

import static com.javabackend.fin.constants.ErrorConstants.*;

@RestController
public class UserController {

    @Inject
    private UserService userService;

    //Displays all user information for a specific userID
    @GetMapping(path = "/users", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    public Collection<User> findUser(@RequestParam Long userID) {
            return userService.findUserByID(userID);
    }

    //Posts a new user to the database
    @PostMapping("/addUser")
    @CrossOrigin
    public User newUser(@RequestBody User newUser) {
        return userService.addNewUser(newUser);
    }

    /*
    @PostMapping(path="/validateUser", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    public List<String> validateUser(@RequestBody User userToValidate){
        List<String> text=new ArrayList<>();
        var users = (List<User>) userService.findAllUsers();
        String message="";
        for(User user: users){
            if(user.getEmail().equals(userToValidate.getEmail())){
                System.out.println(user.getEmail());
                System.out.println(userToValidate.getEmail());
                message="Email exists ";

                if(user.getPassword().equals(userToValidate.getPassword())){
                    System.out.println(user.getPassword());
                    System.out.println(userToValidate.getPassword());
                   int id =user.getUser_id();
                   message += "and password exists.  Successfully validated as "+id;
                   break;
                }
                else {
                    message += "but password incorrect";
                    break;
                }
            }
            else {
                message = "Email doesn't exist.  Please signup";
            }
        }

        text.add(message);
        return text;
    }

 */
}