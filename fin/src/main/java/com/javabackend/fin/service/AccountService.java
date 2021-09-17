package com.javabackend.fin.service;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;

@Service
public class AccountService{
   @Autowired
    private AccountRepository accountRepository;

   @Autowired
    private TransactionRepository transactionRepository;

    public BigDecimal calculateAllDeposits(){
        List<Transaction> transactions=  (List<Transaction>) transactionRepository.findAll();
        Account account=new Account();
        BigDecimal aggTransactions= BigDecimal.ZERO;
        for (Transaction transaction : transactions) {
            if(transaction.getTransaction_type().equals("Deposit")){
                aggTransactions=aggTransactions.add(transaction.getTransaction_amount());
            }
        }
            account.setDeposit_amount(aggTransactions);

        return account.getDeposit_amount();
    }

    public BigDecimal calculateAllWithdrawals(){
        List<Transaction> transactions=  (List<Transaction>) transactionRepository.findAll();
        Account account=new Account();
        BigDecimal aggTransactions= BigDecimal.ZERO;
        for (Transaction transaction : transactions) {
            if(transaction.getTransaction_type().equals("Withdraw")) {
                aggTransactions = aggTransactions.add(transaction.getTransaction_amount());
            }
        }
        account.setWithdraw_amount(aggTransactions);

        return account.getWithdraw_amount();
    }

    public List<Account> findAllAccounts() {
       return (List<Account>) accountRepository.findAll();
    }

    public Account addNewAccount(Account newAccount) {
        return accountRepository.save(newAccount);
    }

}
