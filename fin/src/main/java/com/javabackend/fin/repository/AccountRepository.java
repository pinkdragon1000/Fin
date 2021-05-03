package com.javabackend.fin.repository;
import com.javabackend.fin.models.Account;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

    @Repository
    public interface AccountRepository extends CrudRepository<Account, Long> {
    }


