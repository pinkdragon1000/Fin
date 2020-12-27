package com.javabackend.fin;

import calculator.CommonCalculator;
import calculator.FinHashMap;
import calculator.FinObject;
import com.fasterxml.jackson.annotation.*;
import org.springframework.web.bind.annotation.*;
import javax.xml.bind.annotation.*;
import java.math.BigDecimal;
import java.util.*;

@RestController
@XmlRootElement
public class FinApplicationRequests extends CommonCalculator {

    @JacksonInject
    CommonCalculator commonCalculator;

    @GetMapping("/accounts")
    public FinHashMap<String, BigDecimal> accountInformationEndpoint() {
        return accountInformationEndpointResponse();
    }

    @GetMapping("/deposits")
    public FinHashMap<String, BigDecimal> depositEndpoint() {
        return depositEndpointResponse();
    }
}

