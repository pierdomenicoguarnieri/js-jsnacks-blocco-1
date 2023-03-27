let number;

let sum = 0;

const outputTitle = document.getElementById("outputTitle");

const outputContent = document.getElementById("outputContent");

do{
  number = prompt("Inserisci un numero di 4 cifre:");
}while(!(number.length === 4))

const array = number.split("");

for(let i = 0; i < array.length; i++){
  sum += parseInt(array[i]);
}

outputTitle.innerHTML = "È stato diviso e sommato il numero fornito";

outputContent.innerHTML =`
Il numero ${number} è stato diviso nell'array: ${array}. <br>
Le sue celle sono state sommate tra loro ed il risultato è: ${sum}.
`