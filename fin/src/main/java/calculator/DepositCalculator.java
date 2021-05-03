package calculator;

import javax.inject.Named;
import java.math.BigDecimal;
import java.util.List;


public class DepositCalculator extends CommonCalculator {
    List<BigDecimal> depositList;
    List<String> depositCategories;

    public static void categoryTotalDeposits() {

    }

    public static BigDecimal totalOverallDeposits() {
        return BigDecimal.ONE;
    }

    public static BigDecimal updatedAccountValueWithDeposits() {
        return startingAmount.add(totalOverallDeposits());
    }
}
