/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const klikai = document.querySelector("#btn__element");
let ks = 0;
klikai.addEventListener("click", function() {
  ks++;
  document.querySelector("#btn__state").textContent = ks;
});

