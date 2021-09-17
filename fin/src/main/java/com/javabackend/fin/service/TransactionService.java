package com.javabackend.fin.service;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    public List<Transaction> findAllTransactions() {
        return (List<Transaction>) transactionRepository.findAll(Sort.by(Sort.Direction.ASC, "transactiondate"));
    }

    public BigDecimal calculateTransactionSubTotals(int transactionIndex){
        List<Transaction> transactions=  (List<Transaction>) transactionRepository.findAll(Sort.by(Sort.Direction.ASC, "transactiondate"));
        List<Account> accounts=(List<Account>) accountRepository.findAll();
        BigDecimal subTotal= BigDecimal.ZERO;
            if(transactionIndex==(long)1) {
                if(transactions.get(0).getTransaction_type().equals("Deposit")){
                    subTotal=subTotal.add(accounts.get(0).getAccount_Starting_Amount()).add(transactions.get(0).getTransaction_amount());
                }
                else if(transactions.get(0).getTransaction_type().equals("Withdraw")) {
                    subTotal=subTotal.add(accounts.get(0).getAccount_Starting_Amount()).subtract(transactions.get(0).getTransaction_amount());
                }
                transactions.get(0).setTransaction_subTotal(subTotal);
        }
            else {
                for(int x=1;x<transactions.size();x++)
                {
                    if(transactions.get(x).getTransaction_type().equals("Deposit")){
                        subTotal=(transactions.get(x-1).getTransaction_subTotal()).add(transactions.get(x).getTransaction_amount());
                    }
                    else if (transactions.get(x).getTransaction_type().equals("Withdraw")){
                        subTotal=(transactions.get(x-1).getTransaction_subTotal()).subtract(transactions.get(x).getTransaction_amount());
                    }
                    transactions.get(x).setTransaction_subTotal(subTotal);
                }
            }
        return transactions.get(transactionIndex-1).getTransaction_subTotal();
    }

    public Transaction findCurrentTransaction() {
        return transactionRepository.findById((long) 1).orElse(null);
    }

    public Transaction addNewTransaction(Transaction newTransaction) {
        return transactionRepository.save(newTransaction);
    }

}
