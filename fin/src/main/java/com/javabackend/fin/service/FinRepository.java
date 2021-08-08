package com.javabackend.fin.service;

import com.javabackend.fin.models.Account;
import com.javabackend.fin.models.Transaction;
import com.javabackend.fin.models.User;

import org.springframework.data.repository.CrudRepository;

  interface TransactionRepository extends CrudRepository<Transaction, Long> {
 }

  interface AccountRepository extends CrudRepository<Account, Long> {
 }

  interface UserRepository extends CrudRepository<User, Long> {
 }


