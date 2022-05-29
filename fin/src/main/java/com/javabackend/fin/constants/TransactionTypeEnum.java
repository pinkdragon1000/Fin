package com.javabackend.fin.constants;

public enum TransactionTypeEnum {
    DEPOSIT("Deposit"),
    WITHDRAW("Withdraw");

    private String value;
    public String getValue() {
        return value;
    }
    private TransactionTypeEnum(String value) {
        this.value = value;
    }
    }
