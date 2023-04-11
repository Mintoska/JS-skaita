/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją tikRaktiniaiZodz, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white'
};

function tikRaktiniaiZodz(audiMas) {
  return Object.keys(audiMas);
}
const grazintiRaktiniusZodz = tikRaktiniaiZodz(audi);
console.log(grazintiRaktiniusZodz);