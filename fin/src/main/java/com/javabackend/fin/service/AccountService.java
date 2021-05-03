package com.javabackend.fin.service;
import com.javabackend.fin.models.Account;
import com.javabackend.fin.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository repository;

    public List<Account> findAllAccounts() {
        return (List<Account>) repository.findAll();
    }
}
