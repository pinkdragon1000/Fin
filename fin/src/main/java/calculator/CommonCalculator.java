package calculator;

import com.fasterxml.jackson.annotation.JacksonInject;
import java.math.BigDecimal;
import java.util.*;

public class CommonCalculator {
    @JacksonInject
    DepositCalculator depositCalculator;
    @JacksonInject
    WithdrawalCalculator withdrawalCalculator;

    protected static BigDecimal startingAmount=BigDecimal.TEN;
    protected BigDecimal accountID=new BigDecimal("12345");

    protected HashMap<String, BigDecimal> accountInformation = new HashMap<>();
    protected HashMap<String, BigDecimal> deposits = new HashMap<>();


    public Map<String, BigDecimal> accountInformationEndpointResponse(){
        accountInformation.put("accountID", accountID);
        accountInformation.put("numberOfCategories", depositCalculator.updatedAccountValueWithDeposits());
        return accountInformation;
    }

    public Map<String, BigDecimal> depositEndpointResponse(){
        deposits.put("accountStartingAmount", startingAmount);
        deposits.put("updatedAccountAmountWithDeposits", depositCalculator.updatedAccountValueWithDeposits());
        deposits.put("totalDeposits", depositCalculator.totalOverallDeposits());
        return deposits;
    }

}
