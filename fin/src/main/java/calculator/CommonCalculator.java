package calculator;
import com.fasterxml.jackson.annotation.JacksonInject;

import javax.inject.Inject;
import javax.inject.Named;
import java.math.BigDecimal;


public class CommonCalculator {
    @JacksonInject
    DepositCalculator depositCalculator;
    @JacksonInject
    WithdrawalCalculator withdrawalCalculator;

    protected static BigDecimal startingAmount=BigDecimal.TEN;
    protected BigDecimal accountID=new BigDecimal("12345");

    protected FinObject<String, BigDecimal> accountInformation = new FinObject<>();
    protected FinObject<String, BigDecimal> deposits = new FinObject<>();


    public FinObject<String, BigDecimal> accountInformationEndpointResponse(){
        accountInformation.put("accountID", accountID);
        accountInformation.put("numberOfCategories", depositCalculator.updatedAccountValueWithDeposits());
        return accountInformation;
    }

    public FinObject<String, BigDecimal> depositEndpointResponse(){

        deposits.put("accountStartingAmount", startingAmount);
        deposits.put("updatedAccountAmountWithDeposits", depositCalculator.updatedAccountValueWithDeposits());
        deposits.put("totalDeposits", depositCalculator.totalOverallDeposits());
        return deposits;
    }

}
