{
const formElement = document.querySelector(".form");
const amount = document.querySelector(".form__amount");
const Optional = document.querySelector(".form__currency");
const Result = document.querySelector(".result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

  const value = +amount.value;
  const currency = Optional.value;
  
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

}