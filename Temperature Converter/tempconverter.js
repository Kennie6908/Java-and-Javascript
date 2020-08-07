// assigns constants to corresponding input IDs. 
const celsiusInput = document.querySelector('#celsius > #input-celsius');
const fahrenheitInput = document.querySelector('#fahrenheit > #input-fahrenheit');
const kelvinInput = document.querySelector('#kelvin > #input-kelvin');

// rounds values to two decimal places
function twodecimalplaces(num) {
  return num.toFixed(2);
}

// celsius to fahrenheit and kelvin
function ctoFandK() {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
  const kelvinTemp = celsiusTemp + 273.15;

  fahrenheitInput.value = twodecimalplaces(fahrenheitTemp);
  kelvinInput.value = twodecimalplaces(kelvinTemp);
}

// fahrenheit to celsius and kelvin
function ftoCandK() {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);

  celsiusInput.value = twodecimalplaces(celsiusTemp);
  kelvinInput.value = twodecimalplaces(kelvinTemp);
}

//kelvin to fahrenheit and celsius
function ktoCandF() {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const celsiusTemp = kelvinTemp - 273;
  const fahrenheitTemp = 1.8 * (kelvinTemp - 273) + 32;

  celsiusInput.value = twodecimalplaces(celsiusTemp);
  fahrenheitInput.value = twodecimalplaces(fahrenheitTemp);
}

// refers to input IDs and uses eventlistener to check for input. If there is input, execute conversion function.
function mainconverter() {
  celsiusInput.addEventListener('input', ctoFandK);
  fahrenheitInput.addEventListener('input', ftoCandK);
  kelvinInput.addEventListener('input', ktoCandF);
}

mainconverter();
