it('should calculate the monthly rate correctly', function () {
    const values = {
      amount:100000,
      years:3,
      rate:4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('2974.69')
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount:100010,
      years:3,
      rate:4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('2974.99')
  });
  
  it("should deal with high interest rates", function(){
    const values = {
      amount:130000,
      years:3,
      rate:85
    };
    expect(calculateMonthlyPayment(values)).toEqual('10065.03')
  })
  
  it("should handle a small loan amount", function(){
    const values = {
      amount:2000,
      years:2,
      rate:3
    };
    expect(calculateMonthlyPayment(values)).toEqual('85.96')
  })
  