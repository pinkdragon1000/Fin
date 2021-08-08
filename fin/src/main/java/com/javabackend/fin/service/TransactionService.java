package com.javabackend.fin.service;

import com.javabackend.fin.models.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> findAllTransactions() {
        return (List<Transaction>) transactionRepository.findAll();
    }

    public Transaction findCurrentTransaction() {
        return transactionRepository.findById((long) 1).orElse(null);
    }
}
