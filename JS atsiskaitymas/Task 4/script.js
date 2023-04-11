/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */


fetch('cars.json')
  .then(response => response.json())
  .then(data => {
    const outputDiv = document.querySelector('#output');
    
    data.forEach(item => {
      const brandDiv = document.createElement('div');
      brandDiv.className = 'brand';
      brandDiv.textContent = item.brand;
      
      const modelsUl = document.createElement('ul');
      modelsUl.className = 'models';
      item.models.forEach(model => {
        const modelLi = document.createElement('li');
        modelLi.textContent = model;
        modelsUl.appendChild(modelLi);
      });
      
      brandDiv.appendChild(modelsUl);
      outputDiv.appendChild(brandDiv);
    });
  })
 


