package com.javabackend.fin.models;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "transaction_id", nullable=false)
    private Long transaction_id;

    @ManyToOne
    @JoinColumn(name="account_id", nullable=false)
    private Account account_id;

    @Column(name="transaction_type", nullable=false)
    private String transaction_type;
    @Column(name="transaction_date", nullable=false)
    private Date transactiondate;
    @Column(name="transaction_amount", nullable=false)
    private BigDecimal transaction_amount;

    @Column(name="transaction_subTotal", nullable=false)
    private BigDecimal transaction_subTotal;

    public Account getAccount_id() {
        return account_id;
    }

    public void setAccount_id(Account account_id) {
        this.account_id = account_id;
    }

    public Long getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(Long transaction_id) {
        this.transaction_id = transaction_id;
    }

    public String getTransaction_type() {
       return transaction_type;
    }

    public void setTransaction_type(String transaction_type) {
        this.transaction_type=transaction_type;
    }

    public Date getTransaction_date() {
        return transactiondate;
    }

    public void setTransaction_date(Date transaction_date) {
        this.transactiondate = transaction_date;
    }

    public BigDecimal getTransaction_amount() {
        return transaction_amount;
    }

    public void setTransaction_amount(BigDecimal transaction_amount) {
        this.transaction_amount = transaction_amount;
    }

    public BigDecimal getTransaction_subTotal() {
        return transaction_subTotal;
    }

    public void setTransaction_subTotal(BigDecimal transaction_subTotal) {
        this.transaction_subTotal = transaction_subTotal;
    }
}