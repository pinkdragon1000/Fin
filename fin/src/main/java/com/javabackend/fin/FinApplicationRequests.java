package com.javabackend.fin;

import calculator.CommonCalculator;
import calculator.FinHashMap;
import com.fasterxml.jackson.annotation.JacksonInject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.javabackend.fin.service.IUserService;
import com.javabackend.fin.models.User;

import java.math.BigDecimal;
import java.util.*;


@RestController
public class FinApplicationRequests extends CommonCalculator {

    @Autowired
    private IUserService userService;


    @JacksonInject
    CommonCalculator commonCalculator;


    //Shows users from user table in database
    @GetMapping("/users")
    public List<User> findUsers(Model model) {

        var users = (List<User>) userService.findAll();

        model.addAttribute("users", users);

        return users;
    }


    //TODO
    @GetMapping("/accounts")
    public FinHashMap<String, BigDecimal> accountInformationEndpoint() {
        return accountInformationEndpointResponse();
    }

    @GetMapping("/deposits")
    public FinHashMap<String, BigDecimal> depositEndpoint() {
        return depositEndpointResponse();
    }
}
