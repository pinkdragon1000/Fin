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
    private static final String STARTING_AMOUNT_TRANSACTION_GROUP = "Starting Amount";

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    private Account getAccountByID(String accountID) {
        Collection<Account> accounts = accountRepository.findAllAccountsByAccountID(accountID);
        for (Account account: accounts) {
            if(account.getAccount_id().equals(accountID)){
               return account;
            }
        }
        return null;
    }

    public Collection<Transaction> calculateAndRetrieveTransactions(String accountID) {
        Collection<Transaction> transactions = transactionRepository.findAllTransactionsByAccountID(accountID);
        BigDecimal subTotal= BigDecimal.ZERO;
        Account account = getAccountByID(accountID);
        // Handle account doesn't exist
        if(account != null) {
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
        validateTransactionDate(newTransaction);
        return transactionRepository.save(newTransaction);
    }

    public Transaction updateTransaction(Transaction transaction) {
        validateTransactionDate(transaction);
        Transaction updatedTransaction = transactionRepository.save(transaction);
        syncStartingAmountToAccount(updatedTransaction);
        return updatedTransaction;
    }

    private void validateTransactionDate(Transaction transaction) {
        if (STARTING_AMOUNT_TRANSACTION_GROUP.equals(transaction.getTransaction_group())) {
            validateStartingAmountIsFirst(transaction);
            return;
        }

        Account account = getAccountByID(transaction.getAccount_id());
        if (account != null && transaction.getTransaction_date().before(account.getAccount_Starting_Date())) {
            throw new IllegalArgumentException("Transaction date cannot be before the starting balance date");
        }
    }

    private void validateStartingAmountIsFirst(Transaction startingTransaction) {
        Collection<Transaction> transactions = transactionRepository.findAllTransactionsByAccountID(startingTransaction.getAccount_id());
        for (Transaction transaction : transactions) {
            if (startingTransaction.getTransaction_id() != null && transaction.getTransaction_id().equals(startingTransaction.getTransaction_id())) {
                continue;
            }
            if (transaction.getTransaction_date().before(startingTransaction.getTransaction_date())) {
                throw new IllegalArgumentException("Starting Amount date must be before all other transactions");
            }
        }
    }

    private void syncStartingAmountToAccount(Transaction transaction) {
        if (!STARTING_AMOUNT_TRANSACTION_GROUP.equals(transaction.getTransaction_group())) {
            return;
        }

        Account account = getAccountByID(transaction.getAccount_id());
        if (account == null) {
            return;
        }

        account.setAccount_Starting_Amount(transaction.getTransaction_amount());
        account.setAccount_Starting_Date(transaction.getTransaction_date());
        accountRepository.save(account);
    }

    public Collection<Transaction> deleteTransaction(String account_id, String transaction_id){
        transactionRepository.deleteTransaction(account_id, transaction_id);
        return transactionRepository.findAllTransactionsByAccountID(account_id);
    }


}
