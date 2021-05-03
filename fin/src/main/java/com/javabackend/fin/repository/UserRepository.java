package com.javabackend.fin.repository;
import com.javabackend.fin.models.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

    @Repository
    public interface UserRepository extends CrudRepository<User, Long> {
    }


