package com.javabackend.fin.service;

import com.javabackend.fin.constants.TransactionTypeEnum;
import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.Collection;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    private Account getAccountByID(long accountID) {
        Collection<Account> accounts = accountRepository.findAllAccountsByAccountID(accountID);
        for (Account account: accounts) {
            if(account.getAccount_id()==accountID){
               return account;
            }
        }
        return null;
    }

    public Collection<Transaction> calculateAndRetrieveTransactions(long accountID) {
        Collection<Transaction> transactions = transactionRepository.findAllTransactionsByAccountID(accountID);
        BigDecimal subTotal= BigDecimal.ZERO;
        Account account = getAccountByID(accountID);
        // Handle account doesn't exist
        if(account != null) {
            subTotal = subTotal.add(account.getAccount_Starting_Amount());
            for (Transaction transaction : transactions) {
                if (transaction.getTransaction_type().equals(TransactionTypeEnum.DEPOSIT.getValue())) {
                    subTotal = subTotal.add(transaction.getTransaction_amount());
                } else if (transaction.getTransaction_type().equals(TransactionTypeEnum.WITHDRAW.getValue())) {
                    subTotal = subTotal.subtract(transaction.getTransaction_amount());
                }
                transaction.setTransaction_subTotal(subTotal);
            }
        }
        return transactions;
    }

    public Transaction addNewTransaction(Transaction newTransaction) {
        return transactionRepository.save(newTransaction);
    }

    public Collection<Transaction> deleteTransaction(Long account_id, Long transaction_id){
        transactionRepository.deleteTransaction(account_id, transaction_id);
        return transactionRepository.findAllTransactionsByAccountID(account_id);
    }


}
