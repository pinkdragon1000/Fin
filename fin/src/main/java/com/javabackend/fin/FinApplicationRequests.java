package com.javabackend.fin;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.service.AccountService;
import com.javabackend.fin.service.TransactionService;
import com.javabackend.fin.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.javabackend.fin.models.User;

import javax.inject.Inject;

import java.util.*;

@RestController
public class FinApplicationRequests {

    @Inject
    private UserService userService;
    @Inject
    private AccountService accountService;
    @Inject
    private TransactionService transactionService;


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


    @GetMapping(path = "/transactions", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:8080/transactions")
    public List<Transaction> findTransactions (Model model) {

        var transactions = (List<Transaction>) transactionService.findAllTransactions();


        model.addAttribute("transactions", transactions);

        return transactions;
    }

    //Gets user account information such as account description, account type, account starting amount, transaction amount from database and calculated fields
    @GetMapping(path = "/accounts", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:8080/accounts")
    public List<Account> findAccounts(Model model) {
        var accounts = (List<Account>) accountService.findAllAccounts();
        model.addAttribute("accounts", accounts);
        accounts.get(0).setDeposit_amount(accountService.calculateAllDeposits());

        return accounts;
    }





}


