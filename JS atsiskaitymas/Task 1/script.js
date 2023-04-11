/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector('form');
const output = document.querySelector('#output');

function konvertuoti(kg) {
  const lb = kg * 2.2046;
  const g = kg / 0.0010000;
  const oz = kg * 35.274;
  return { lb, g, oz };
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(event);
  const input = parseFloat(document.querySelector('#search').value);
  if (!isNaN(input)) {
    const { lb, g, oz } = konvertuoti(input);
    const result = `${input} kilogramų vertė yra lygi:<br> 
    svarų ${lb.toFixed(2)} lb,<br> 
    gramų ${g.toFixed(2)} g,<br> 
    uncijų ${oz.toFixed(2)} oz.`;
    // du skaičiai po kablelio kaip ir standartas
    output.innerHTML = `<h1>${result}</h1>`;
  } else {
    output.innerHTML = '<h2>neteisingi įvedimo duomenys</h2>';
  }
  // Ar reikėjo per createElements daryti? InnerHTML paprasčiau ir greičiau tokioje užduotyje. Jei spėsiu, perdarysiu kaip mokinote
});

