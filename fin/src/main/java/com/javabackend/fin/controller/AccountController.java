package com.javabackend.fin.controller;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.service.AccountService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.Collection;

@RestController
public class AccountController {

    @Inject
    private AccountService accountService;

    //Displays all account information for a specific userID
    @GetMapping(path = "/accounts", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    public Collection<Account> findAccounts(@RequestParam Long userID) {
        Collection<Account> accounts= accountService.findAllAccountsByUserID(userID);
        accounts=accountService.setDepositWithdrawAmount(accounts);
        accounts=accountService.setAllAccountCurrentAmounts(accounts);
        accounts=accountService.setAllAccountDifferences(accounts);
        return accounts;
    }

    //Posts a new account to the database
    @PostMapping("/addAccount")
    @CrossOrigin
    Account newAccount(@RequestBody Account newAccount) {
        return accountService.addNewAccount(newAccount);
    }

    //Deletes accounts and associated transactions for that account
    @PostMapping("/deleteAccount")
    @CrossOrigin
    public Collection<Account> deleteAccount(@RequestBody Account account){
        return accountService.deleteAccountAndTransactions(account.getAccount_id(), account.getUser_id());
    }

}