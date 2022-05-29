package com.javabackend.fin.service;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
interface UserRepository extends CrudRepository<User, Long> {
 @Query(value="SELECT * FROM Users u WHERE u.user_id = ?1", nativeQuery = true)
 Collection<User> findAllUsersByUserID(Long userID);
}

@Repository
interface AccountRepository extends CrudRepository<Account, Long> {
 @Query(value="SELECT * FROM Accounts a WHERE a.user_id = ?1", nativeQuery = true)
 Collection<Account> findAllAccountsByUserID(Long userID);

 @Query(value="SELECT * FROM Accounts a WHERE a.account_id = ?1", nativeQuery = true)
 Collection<Account>findAllAccountsByAccountID(Long accountID);
 }

@Repository
interface TransactionRepository extends CrudRepository<Transaction, Long> {
 @Query(value="SELECT * FROM Transactions t WHERE t.account_id = ?1 order by transaction_date", nativeQuery = true)
Collection<Transaction> findAllTransactionsByAccountID(Long accountID);
}
