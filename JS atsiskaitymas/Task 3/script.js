/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

// const migt = document.querySelector('#btn');
// const juzerDiv = document.getElementById('output-cointainer');

// migt.addEventListener('click', () => { migt.disabled = true;

//   fetch('https://api.github.com/users')
 
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  message.style.display = "none";
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      const atsVart = data[Math.floor(Math.random() * data.length)];
  
      const userLogin = document.createElement("h2");
      userLogin.innerText = `Login: ${atsVart.login}`;
      
      const userAvatar = document.createElement("img");
      userAvatar.src = atsVart.avatar_url;
      userAvatar.alt = `${atsVart.login}'s avatar`;
      
      output.appendChild(userLogin);
      output.appendChild(userAvatar);
    })
    .catch(error => {
      output.innerHTML = "<p>kažkas nepavyko</p>";
      console.error(error);
    });
});