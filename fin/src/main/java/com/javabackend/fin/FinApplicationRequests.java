package com.javabackend.fin;
import calculator.CommonCalculator;
import calculator.FinObject;
import com.javabackend.fin.models.Account;
import com.javabackend.fin.service.AccountService;
import com.javabackend.fin.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.javabackend.fin.models.User;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.util.*;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;

@RestController
public class FinApplicationRequests extends CommonCalculator {

    @Inject
    private UserService userService;
    @Inject
    private AccountService accountService;
    @Inject
    CommonCalculator commonCalculator;


    //Shows users from user table in database
    @GetMapping(path = "/users", produces = {MediaType.APPLICATION_JSON_VALUE})
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


    //TODO
    @GetMapping(path = "/accounts", produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:8080/accounts")
    public List<Account> findAccounts(Model model) {

        var accounts = (List<Account>) accountService.findAllAccounts();

        model.addAttribute("accounts", accounts);

        return accounts;
    }

    @GetMapping("/deposits")
    public FinObject<String, BigDecimal> depositEndpoint() {
        return depositEndpointResponse();
    }
}
