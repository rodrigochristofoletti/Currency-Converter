const convertButton = document.getElementById("btn");
const input = document.getElementById("user-input");
const brazilianCurrencyValue = document.getElementById(
  "brazilian-currency-value"
);
const otherCurrenciesValue = document.getElementById("other-currency-value");
const select = document.getElementById("currency-select");
const convertedCurrencyName = document.querySelector(
  ".converted-currency-name"
);
const convertedCurrencyValue = document.querySelector(
  ".converted-currency-value"
);
const currencyImg = document.getElementById("currency-img");

const selectCurrencyFrom = document.getElementById('currency-from');
const convertedFromText = document.querySelector('.convert-from-currency');
const convertedFromValue = document.querySelector('.converted-from-value');
const convertedFromImg = document.getElementById('converted-from-img');

function convertValues() {
  const userInput = input.value;
  const realValue = 1;
  const dollarValue = 5.8;
  const euroValue = 6.2;
  const poundValue = 6.4;
  const bitCoinValue = 416328.72;

  if (select.value == "dollar") {
    otherCurrenciesValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(userInput / dollarValue);
  }

  if (select.value == "euro") {
    otherCurrenciesValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(userInput / euroValue);
  }

  if (select.value == "pound") {
    otherCurrenciesValue.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(userInput / poundValue);
  }

  if (select.value == "bitcoin") {
    otherCurrenciesValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "XBT",
    }).format(userInput / bitCoinValue);
  }

  brazilianCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(userInput);
}

function changingConvertedCurrency() {
  if (select.value == "dollar") {
    convertedCurrencyName.innerHTML = "USD Dollar";
    currencyImg.src = "./assets/dolar currency.png";
  }

  if (select.value == "euro") {
    convertedCurrencyName.innerHTML = "EUR euro";
    currencyImg.src = "./assets/euro currency.png";
  }

  if (select.value == "pound" ) {
    convertedCurrencyName.innerHTML = "GBP pound";
    currencyImg.src = "./assets/libra.png";
  }

  if (select.value == "bitcoin") {
    convertedCurrencyName.innerHTML = "XBT bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }

  if (select.value == "real") {
    convertedCurrencyName.innerHTML = "Brazilian Real";
    currencyImg.src = "./assets/brazilian currency.png";
  }
  convertValues();
}

function changingCurrency() {
    if (selectCurrencyFrom.value == "real") {
        convertedFromText.innerHTML = "Brazilian Real";
        convertedFromImg.src = "./assets/brazilian currency.png";
        input.placeholder = "R$ 0.00"
        convertedFromValue.innerHTML = "R$ 0,00"
        
      }

    if (selectCurrencyFrom.value == "dollar") {
        convertedFromText.innerHTML = "USD Dollar";
        convertedFromImg.src = "./assets/dolar currency.png";
        input.placeholder = "USD 0.00"
        convertedFromValue.innerHTML = "US$ 0,00"

      }
    
      if (selectCurrencyFrom.value == "euro") {
        convertedFromText.innerHTML = "EUR euro";
        convertedFromImg.src = "./assets/euro currency.png";
        input.placeholder = "€ 0.00"
        convertedFromValue.innerHTML = "0,00 €"
      }
    
      if (selectCurrencyFrom.value == "pound" ) {
        convertedFromText.innerHTML = "GBP pound";
        convertedFromImg.src = "./assets/libra.png";
        input.placeholder = "£ 0.00"
        convertedFromValue.innerHTML = "£0.00"
      }
    
      if (selectCurrencyFrom.value == "bitcoin") {
        convertedFromText.innerHTML = "XBT bitcoin";
        convertedFromImg.src = "./assets/bitcoin.png";
        input.placeholder = "XBT 0.00"
        convertedFromValue.innerHTML = "XBT 0.00"
      }
}

convertButton.addEventListener("click", convertValues);
select.addEventListener("change",changingConvertedCurrency);
selectCurrencyFrom.addEventListener("change",changingCurrency);
