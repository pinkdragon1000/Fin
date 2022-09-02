package com.javabackend.fin.models;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Accounts")
public class Account {
   @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "account_id", nullable=false)
   private Long account_id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user_id;

    @Column(name="account_type", nullable=false)
    private String account_type;
    @Column(name="account_starting_amount", nullable=false)
    private BigDecimal account_starting_amount;

    @Column(name="account_description", nullable=false)
    private String account_description;

    @Column(name="deposit_amount", nullable=false)
    private BigDecimal deposit_amount=BigDecimal.ZERO;

    @Column(name="withdraw_amount", nullable=false)
    private BigDecimal withdraw_amount=BigDecimal.ZERO;

    @Column(name="account_current_amount")
    private BigDecimal account_current_amount;

    @Column(name="account_difference")
    private BigDecimal account_difference;

    public Long getAccount_id() {
        return account_id;
    }

    public void setAccount_id(Long account_id) {
        this.account_id = account_id;
    }

    public Long getUser_id() {
        return user_id.getUser_id();
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public String getAccount_Description() {
       return account_description;
    }

    public void setAccount_Description(String account_description) {
        this.account_description=account_description;
    }

    public String getAccount_Type() {
        return account_type;
    }

    public void setAccount_Type(String account_type) {
        this.account_type = account_type;
    }

    public BigDecimal getAccount_Starting_Amount() {
        return account_starting_amount;
    }

    public void setAccount_Starting_Amount(BigDecimal account_starting_amount) {
        this.account_starting_amount = account_starting_amount;
    }

    public BigDecimal getAccount_Current_Amount() {
        return account_current_amount;
    }

    public void setAccount_Current_Amount(BigDecimal account_current_amount) {
        this.account_current_amount = account_current_amount;
    }

    public BigDecimal getAccount_Difference() {
        return account_difference;
    }

    public void setAccount_Difference(BigDecimal account_difference) {
        this.account_difference = account_difference;
    }

    public BigDecimal getDeposit_amount() {
        return deposit_amount;
    }

    public void setDeposit_amount(BigDecimal deposit_amount) {
        this.deposit_amount = deposit_amount;
    }

    public BigDecimal getWithdraw_amount() {
        return withdraw_amount;
    }

    public void setWithdraw_amount(BigDecimal withdraw_amount) {
        this.withdraw_amount = withdraw_amount;
    }
}