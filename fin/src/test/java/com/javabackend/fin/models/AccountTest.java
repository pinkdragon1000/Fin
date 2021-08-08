package com.javabackend.fin.models;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AccountTest {

	Account account=new Account();
	BigDecimal depositAmount=new BigDecimal("50");

	@Test
	void testDepositAmountGetterAndSetter() {
		account.setDeposit_amount(new BigDecimal(50));
		assertEquals(depositAmount, account.getDeposit_amount());
	}

}
