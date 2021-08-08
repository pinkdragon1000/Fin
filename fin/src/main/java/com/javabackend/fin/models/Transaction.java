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

   /* @ManyToOne(targetEntity = User.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    private List<User> user_id;
*/
    @Column(name="transaction_type", nullable=false)
    private String transaction_type;
    @Column(name="transaction_date", nullable=false)
    private Date transaction_date;
    @Column(name="transaction_amount", nullable=false)
    private BigDecimal transaction_amount;

    public Transaction() {
    }

    /*
    public List<User> getUser_ID() {
        return user_id;
    }

    public void setUser_ID(ArrayList<User> user_id) {
        this.user_id = user_id;
    }*/

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
        return transaction_date;
    }

    public void setTransaction_date(Date transaction_date) {
        this.transaction_date = transaction_date;
    }

    public BigDecimal getTransaction_amount() {
        return transaction_amount;
    }

    public void setTransaction_amount(BigDecimal transaction_amount) {
        this.transaction_amount = transaction_amount;
    }
}