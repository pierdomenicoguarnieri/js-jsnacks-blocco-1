const outputTitle = document.getElementById("outputTitle");

const outputContent = document.getElementById("outputContent");

let message = "";

for(let i = 0; i < 1000; i++){
  const number = Math.pow(2, i);
  message +=`
  2^${i} = ${number}<br>
  `
}

// let i = 0;

// while(i < 1000){
//   const number = Math.pow(2, i);
//   message +=`
//   2^${i} = ${number}<br>
//   `
// }


outputTitle.innerHTML = "Sono state calcolate tutte le potenze cha vanno da 2^0 a 2^999 (1000 potenze)."

outputContent.innerHTML =`
${message}
`