let formElement = document.querySelector(".form");
let amount = document.querySelector(".form__amount");
let Optional = document.querySelector(".form__currency");
let Result = document.querySelector(".result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

  let value = +amount.value;
  let currency = Optional.value;
  let result;  

  switch (currency) {
    case "EUR" :
      result = value / 4.68;
    break;
    case "GBP" :
      result = value / 5.44;
    break;
    case "USD" :
      result = value / 4.51;

  }
  Result.innerText = `${result.toFixed(2)} ${currency}`;
  

})
