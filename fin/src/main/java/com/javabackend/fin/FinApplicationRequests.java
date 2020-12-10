package com.javabackend.fin;

import calculator.CommonCalculator;
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
    public Map<String, BigDecimal> accountInformationEndpoint() {
        return accountInformationEndpointResponse();
    }

    @GetMapping("/deposits")
    public Map<String, BigDecimal> depositEndpoint() {
        return depositEndpointResponse();
    }
}

