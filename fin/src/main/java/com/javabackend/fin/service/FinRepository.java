package com.javabackend.fin.service;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.models.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
interface UserRepository extends CrudRepository<User, Long> {
}

@Repository
interface AccountRepository extends CrudRepository<Account, Long> {
 }

@Repository
interface TransactionRepository extends PagingAndSortingRepository<Transaction, Long> {
}
