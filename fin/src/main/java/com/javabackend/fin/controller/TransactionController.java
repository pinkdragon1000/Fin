package com.javabackend.fin.controller;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.service.TransactionService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.Collection;

@RestController
public class TransactionController {

    @Inject
    private TransactionService transactionService;

    //Displays all transactions for a specific accountID
    @GetMapping(path = "/transactions", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    public Collection<Transaction> findTransactions(@RequestParam Long accountID) {
        return transactionService.calculateAndRetrieveTransactions(accountID);
    }

//Posts a new transaction to the database
    @PostMapping("/addTransaction")
    @CrossOrigin
    Transaction newTransaction(@RequestBody Transaction newTransaction) {
        return transactionService.addNewTransaction(newTransaction);
    }

    //Deletes transaction within an account
    @PostMapping("/deleteTransaction")
    @CrossOrigin
    public Collection<Transaction> deleteTransaction(@RequestBody Transaction transaction){
        return transactionService.deleteTransaction(transaction.getAccount_id(), transaction.getTransaction_id());
    }

}