{
const formElement = document.querySelector(".form");
const amount = document.querySelector(".form__amount");
const Optional = document.querySelector(".form__currency");
const Result = document.querySelector(".result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

  const value = +amount.value;
  const currency = Optional.value;
  
  const calculateResult = (value, currency) => {
  const rateEUR = 4.68;
  const rateGBP = 5.44;
  const rateUSD = 4.51;

    switch (currency) {
      case "EUR" :
        return value / rateEUR;
      
      case "GBP" :
        return value / rateGBP;
      
      case "USD" :
        return value / rateUSD;
  
    }
  };
  
  const result = calculateResult(value, currency);

  
  Result.innerText = `${result.toFixed(2)} ${currency}`;
  

})

}