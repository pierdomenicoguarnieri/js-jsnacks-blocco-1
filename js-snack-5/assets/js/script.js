const numbers = [];

const output = document.getElementById("output");

let i = 0;

while(i < 6){
  let number = parseInt(prompt("Inserisci un numero: (iterazione numero " + (i + 1) + " del ciclo)"));
  
  if(!(number % 3)){
    numbers.push(number);
  }

  i++;
}

output.innerHTML =`
Hai inserito ${i} numeri, dei quali ${numbers} sono divisibili per 3.
`