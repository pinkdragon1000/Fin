package com.javabackend.fin.service;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.models.User;

import com.javabackend.fin.models.UserLite;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;


@Repository
interface UserReadRepository extends CrudRepository<UserLite, Long> {
 @Query(value="SELECT * FROM Users u WHERE u.user_id = ?1", nativeQuery = true)
 Collection<UserLite> findAllUsersByUserID(Long userID);
}

@Repository
interface UserWriteRepository extends CrudRepository<User, Long> {
}

@Repository
interface AccountRepository extends CrudRepository<Account, Long> {
 @Query(value = "SELECT * FROM Accounts a WHERE a.user_id = ?1", nativeQuery = true)
 Collection<Account> findAllAccountsByUserID(Long userID);

 @Query(value = "SELECT * FROM Accounts a WHERE a.account_id = ?1", nativeQuery = true)
 Collection<Account> findAllAccountsByAccountID(Long accountID);

 @Modifying
 @Transactional
 @Query(value="Delete from Accounts a where a.account_id=?", nativeQuery=true)
 void deleteAccount(Long accountID);

}

@Repository
interface TransactionRepository extends CrudRepository<Transaction, Long> {

 @Query(value="SELECT * FROM Transactions t WHERE t.account_id = ?1 order by transaction_date", nativeQuery = true)
Collection<Transaction> findAllTransactionsByAccountID(Long accountID);

 @Modifying
@Transactional
 @Query(value="Delete from Transactions t where t.account_id=?1 and t.transaction_id=?2", nativeQuery=true)
 void deleteTransaction(Long accountID, Long transactionID);

 @Modifying
 @Transactional
 @Query(value="Delete from Transactions t where t.account_id=?1", nativeQuery=true)
 void deleteTransactions(Long accountID);


}


