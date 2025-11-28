/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest
*/

/*

PREP

Params: 
  principle, an integer, the amount of money investing. 
  interest, a float, the interest rate.
  tax, a float, the rate the money will be taxed at (only accured interest is taxed)
  desired, a float or integer, the amount of money the investment needs to return
Returns: An integer, the amount of years to wait before the target sum is reached
Example: P = 1000, I = 0.05, T = 0.18, D = 1100 // 3
Psuedo Code: 
  function calculateYears(principal, interest, tax, desired):

    years ← 0

    while principal < desired:
        earned_interest = principal * interest
        taxed_interest = earned_interest * (1 - tax)
        principal = principal + taxed_interest
        years = years + 1

    return years
*/

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
  
    while (principal < desired) {
      // interest earned this year
      const earned = principal * interest;
      // tax applied only to earned interest
      const taxed = earned * (1 - tax);
      // update principal
      principal += taxed;
      years++;
    }
  
    return years;
  }