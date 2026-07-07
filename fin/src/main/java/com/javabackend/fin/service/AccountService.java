package com.javabackend.fin.service;

import com.javabackend.fin.constants.TransactionTypeEnum;
import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import static java.util.stream.Collectors.toList;

@Service
public class AccountService{
   private static final String STARTING_AMOUNT_TRANSACTION_GROUP = "Starting Amount";

   @Autowired
    private AccountRepository accountRepository;

   @Autowired
    private TransactionRepository transactionRepository;

   @Autowired
   private TransactionService transactionService;

   public BigDecimal calculateAllDeposits(String accountID) {
       Collection<Transaction> transactions = transactionRepository.findAllTransactionsByAccountID(accountID);
       BigDecimal aggTransactions=BigDecimal.ZERO;
       Account account=new Account();
       for(Transaction transaction: transactions) {
           if(transaction.getTransaction_type().equals(TransactionTypeEnum.DEPOSIT.getValue())){
               aggTransactions=aggTransactions.add(transaction.getTransaction_amount());
           }
       }
       account.setDeposit_amount(aggTransactions);
       return account.getDeposit_amount();
   }

    public BigDecimal calculateAllWithdrawals(String accountID) {
        Collection<Transaction> transactions = transactionRepository.findAllTransactionsByAccountID(accountID);
        BigDecimal aggTransactions=BigDecimal.ZERO;
        Account account=new Account();
        for(Transaction transaction: transactions) {
            if(transaction.getTransaction_type().equals(TransactionTypeEnum.WITHDRAW.getValue())){
                aggTransactions=aggTransactions.add(transaction.getTransaction_amount());
            }
        }
        account.setWithdraw_amount(aggTransactions);
        return account.getWithdraw_amount();
    }

    public Collection<Account> setDepositWithdrawAmount(Collection<Account> accounts) {
        for(Account account: accounts) {
            String accountID=account.getAccount_id();
            account.setDeposit_amount(calculateAllDeposits(accountID));
            account.setWithdraw_amount(calculateAllWithdrawals(accountID));
        }
        return accounts;
    }
    
    public Collection<Account> setAllAccountCurrentAmounts(Collection<Account> accounts) {
        for(Account account: accounts) {
            String accountID=account.getAccount_id();
            BigDecimal accountCurrentAmount=setAccountCurrentAmount(accountID);
            if(accountCurrentAmount==null) {
                account.setAccount_Current_Amount(account.getAccount_Starting_Amount());
            }
            else {
                account.setAccount_Current_Amount(accountCurrentAmount);
            }
        }
        return accounts;
    }

    public BigDecimal setAccountCurrentAmount(String accountID) {
        Collection<Transaction> transactions = transactionService.calculateAndRetrieveTransactions(accountID);
        List<Transaction> transactionsList = transactions.stream().collect(toList());
        if (transactionsList.size() == 0) {
            return null;
        } else {
            return transactionsList.get(transactionsList.size() - 1).getTransaction_subTotal();
        }
    }

    public Collection<Account> setAllAccountDifferences(Collection<Account> accounts) {
        for(Account account: accounts) {
                account.setAccount_Difference(account.getAccount_Current_Amount().subtract(account.getAccount_Starting_Amount()));
        }
        return accounts;
    }

    public Collection<Account> findAllAccountsByUserID(String userID){
        return accountRepository.findAllAccountsByUserID(userID);
    }

    public Account addNewAccount(Account newAccount) {
        Account account = accountRepository.save(newAccount);
        saveStartingAmountTransaction(account);
        return account;
    }

    public Account updateAccount(Account account) {
        validateStartingAmountIsFirst(account);
        Account updatedAccount = accountRepository.save(account);
        saveStartingAmountTransaction(updatedAccount);
        return updatedAccount;
    }

    private void validateStartingAmountIsFirst(Account account) {
        Collection<Transaction> transactions = transactionRepository.findAllTransactionsByAccountID(account.getAccount_id());
        for (Transaction transaction : transactions) {
            if (STARTING_AMOUNT_TRANSACTION_GROUP.equals(transaction.getTransaction_group())) {
                continue;
            }
            if (transaction.getTransaction_date().before(account.getAccount_Starting_Date())) {
                throw new IllegalArgumentException("Starting Amount date must be before all other transactions");
            }
        }
    }

    private void saveStartingAmountTransaction(Account account) {
        Collection<Transaction> startingTransactions = transactionRepository.findAllTransactionsByAccountIDAndGroup(
                account.getAccount_id(),
                STARTING_AMOUNT_TRANSACTION_GROUP
        );
        Transaction startingTransaction = startingTransactions.stream().findFirst().orElse(new Transaction());
        startingTransaction.setAccount_id(account);
        startingTransaction.setTransaction_type(TransactionTypeEnum.DEPOSIT.getValue());
        startingTransaction.setTransaction_group(STARTING_AMOUNT_TRANSACTION_GROUP);
        startingTransaction.setTransaction_amount(account.getAccount_Starting_Amount());
        startingTransaction.setTransaction_date(account.getAccount_Starting_Date());
        transactionRepository.save(startingTransaction);
    }

    public Collection<Account> deleteAccountAndTransactions(String account_id, String user_id){
       transactionRepository.deleteTransactions(account_id);
       accountRepository.deleteAccount(account_id);
       return accountRepository.findAllAccountsByUserID(user_id);
    }

}
