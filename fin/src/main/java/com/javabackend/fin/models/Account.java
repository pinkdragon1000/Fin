package com.javabackend.fin.models;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "account_id", nullable=false)
    private Long account_id;

   /* @ManyToOne(targetEntity = User.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    private List<User> user_id;
*/
    @Column(name="account_type", nullable=false)
    private String account_type;
    @Column(name="account_starting_amount", nullable=false)
    private BigDecimal account_starting_amount;

    @Column(name="account_description", nullable=false)
    private String account_description;

    public Account() {
    }

    public Account(Long account_id, ArrayList<User> user_id, String account_type, String account_description, BigDecimal account_starting_amount) {
        this.account_id = account_id;
        this.account_type=account_type;
        this.account_description=account_description;
        this.account_starting_amount=account_starting_amount;
    }

    /*
    public List<User> getUser_ID() {
        return user_id;
    }

    public void setUser_ID(ArrayList<User> user_id) {
        this.user_id = user_id;
    }*/

    public Long getAccount_ID() {
        return account_id;
    }

    public void setAccount_ID(Long account_id) {
        this.account_id = account_id;
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

    public void setAccount_Type(String account_id) {
        this.account_type = account_type;
    }

    public BigDecimal getAccount_Starting_Amount() {
        return account_starting_amount;
    }

    public void setAccount_Starting_Amount(BigDecimal account_starting_amount) {
        this.account_starting_amount = account_starting_amount;
    }
}