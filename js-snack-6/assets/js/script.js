const n = parseInt(prompt("Inserisci il numero dei numeri elevati al cubo che vorresti stampare:"));

let message = "";

const outputTitle = document.getElementById("outputTitle");

const outputContent = document.getElementById("outputContent")

for(let i = 0; i < n; i++){
  const number = Math.pow(i, 3);

  message +=`
  ${i}^3 = ${number} <br>
  `
}

// let i = 0;

// while(i < n){
//   const number = Math.pow(i, 3);

//   message +=`
//   ${i}^3 = ${number} <br>
//   `
//   i++;
// }

outputTitle.innerHTML =`
Hai deciso di generare il cubo di ${n} numeri:
`

outputContent.innerHTML =`
${message}
`