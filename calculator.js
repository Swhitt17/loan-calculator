function setupIntialValues() {
    const values = {amount:250000, years:10, rate:5}
    let amountInput = getElementById('loan-amount');
    amountInput.value = values.amount;
    let yearsInput = getElementById('loan-years');
    yearsInput.value = values.years; 
    let rateInput = getElementById('loan-rate')
    rateInput.value = values.rate;
    update()
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const getCurrentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIValues));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const monthlyRate = (values.rate/100)/12;
    const n = Math.floor(values.years * 12);
    return(
      (monthlyRate * values.amount) /
      (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2)
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthlyInput = document.getElementById('monthly-payment');
    monthlyInput.innerText = "$" + monthly;
  }
  