package com.javabackend.fin.controller;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.service.AccountService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

@RestController
public class AccountController {

    @Inject
    private AccountService accountService;

    //Gets account information for a user such as account description, account type, account starting amount, transaction amount from database and calculated fields
    @GetMapping(path = "/accounts", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:8080/accounts")
    public List<Account> findAccounts(Model model) {
        var accounts = (List<Account>) accountService.findAllAccounts();
        if(accounts==null){
            System.out.println("ERROR");
        }
        model.addAttribute("accounts", accounts);
        accounts.get(0).setDeposit_amount(accountService.calculateAllDeposits());
        accounts.get(0).setWithdraw_amount(accountService.calculateAllWithdrawals());
        return accounts;
    }

    //Add an account to the database
    @PostMapping("/addAccount")
    Account newAccount(@RequestBody Account newAccount) {
        return accountService.addNewAccount(newAccount);
    }

}