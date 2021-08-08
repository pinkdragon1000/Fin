package com.javabackend.fin.models;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TransactionTest {

	Transaction account=new Transaction();
	BigDecimal depositAmount=new BigDecimal("50");

	@Test
	void testTransactionAmountGetterAndSetter() {
		account.setTransaction_amount(new BigDecimal(50));
		assertEquals(depositAmount, account.getTransaction_amount());
	}

}
