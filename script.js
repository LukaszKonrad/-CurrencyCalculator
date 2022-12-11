{

  const calculateResult = (value, currency) => {

    const rateEUR = 4.68;
    const rateGBP = 5.44;
    const rateUSD = 4.51;

    switch (currency) {
      case "EUR":
        return value / rateEUR;

      case "GBP":
        return value / rateGBP;

      case "USD":
        return value / rateUSD;

    }
  };

  const updateResultText = (result, currency) => {
    const Result = document.querySelector(".result");
    Result.innerText = `${result.toFixed(2)} ${currency}`;
  }
  const onFormSubmit = (event) => {
    event.preventDefault();

    const amount = document.querySelector(".form__amount");
    const Optional = document.querySelector(".form__currency");


    const value = +amount.value;
    const currency = Optional.value;

    const result = calculateResult(value, currency);

    updateResultText(result, currency);

  }

  const init = () => {

    const formElement = document.querySelector(".form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();

}