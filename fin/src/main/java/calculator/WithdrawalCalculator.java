package calculator;

import java.math.BigDecimal;
import java.util.*;

public class WithdrawalCalculator extends CommonCalculator{
    List<BigDecimal> WithdrawalList;
    List<String> WithdrawalCategories;

    public static void categoryTotalWithdrawals(){

    }
    public static BigDecimal totalOverallWithdrawals(){
        return BigDecimal.ONE;
    }
    public static BigDecimal updatedAccountValueWithWithdrawals(){
        return CommonCalculator.startingAmount.subtract(totalOverallWithdrawals());
    }
}
