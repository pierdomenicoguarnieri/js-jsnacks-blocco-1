let number;

let sum = 0;
do{
  number = prompt("Inserisci un numero di 4 cifre:");
}while(!(number.length === 4))

const array = number.split("");

for(let i = 0; i < array.length; i++){
  sum += parseInt(array[i]);
}
