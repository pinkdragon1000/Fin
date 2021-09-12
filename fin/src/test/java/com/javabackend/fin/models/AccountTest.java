package com.javabackend.fin.models;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AccountTest {
	Account account=new Account();

	BigDecimal accountStartingAmount=new BigDecimal("1000");
	BigDecimal depositAmount=new BigDecimal("50");
	BigDecimal withdrawAmount=new BigDecimal("20");
	String accountDescription="TD Bank Checking";
	String accountType="Checking";

@Test
void testAccountStartingAmountGetterAndSetter(){
	account.setAccount_Starting_Amount(new BigDecimal("1000"));
	assertEquals(accountStartingAmount, account.getAccount_Starting_Amount());
}

	@Test
	void testAccountTypeGetterAndSetter(){
		account.setAccount_Type("Checking");
		assertEquals(accountType, account.getAccount_Type());
	}
	@Test
	void testAccountDescriptionGetterAndSetter(){
		account.setAccount_Description("TD Bank Checking");
		assertEquals(accountDescription, account.getAccount_Description());
	}

	@Test
	void testDepositAmountGetterAndSetter() {
		account.setDeposit_amount(new BigDecimal(50));
		assertEquals(depositAmount, account.getDeposit_amount());
	}

	@Test
	void testWithdrawAmountGetterAndSetter() {
		account.setWithdraw_amount(new BigDecimal(20));
		assertEquals(withdrawAmount, account.getWithdraw_amount());
	}

}
