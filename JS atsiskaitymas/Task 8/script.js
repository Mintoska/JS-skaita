/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


const number1 = parseFloat(prompt('įvesti pirmą skaičių: '));

const operator = prompt('įvesti operacijos simbolį(  ): ');
// operacijos simboliai:
// +  sudėtis
// -  atintis
// *  daugyba
// /  dalyba

const number2 = parseFloat(prompt('įvesti antrą skaičių: '));

let rezultatas;
if (operator == '+') {
    rezultatas = number1 + number2;
}
else if (operator == '-') {
    rezultatas = number1 - number2;
}
else if (operator == '*') {
    rezultatas = number1 * number2;
}
else {
    rezultatas = number1 / number2;
}

console.log(alert(`${number1} ${operator} ${number2} = ${rezultatas}`));