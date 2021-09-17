package com.javabackend.fin.controller;

import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.service.TransactionService;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

@RestController
public class TransactionController {

    @Inject
    private TransactionService transactionService;

    //shows all transactions
    @GetMapping(path = "/transactions", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:8080/transactions")
    public List<Transaction> findTransactions (Model model) {
        var transactions = (List<Transaction>) transactionService.findAllTransactions();
        model.addAttribute("transactions", transactions);

        for(int x=0; x< transactions.size(); x++){
            transactions.get(x).setTransaction_subTotal(transactionService.calculateTransactionSubTotals(x+1));
        }
        return transactions;
    }

    @PostMapping("/addTransaction")
    Transaction newTransaction(@RequestBody Transaction newTransaction) {
        return transactionService.addNewTransaction(newTransaction);
    }

}