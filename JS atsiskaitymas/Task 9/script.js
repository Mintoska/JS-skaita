/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Filmas", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */


class Filmas {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
}
// kaip pavyzdys, suvedu vieną iš mano favoritinių filmų:
const filmas = new Filmas("Aliens", "Džeimsas Kameronas", 185000000);
const tikrinamBiudzeta = filmas.budget > 100 ? "didesnis nei 100 Mln" : "mažesnis nei 100 Mln";
console.log(`Title: ${filmas.title}, Director: ${filmas.director}, Budget: ${tikrinamBiudzeta}`);


