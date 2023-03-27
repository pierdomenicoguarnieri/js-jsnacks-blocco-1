# JSnack Blocco 1

## Consegna

**JSnack 5**

 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

**JSnack 6**

 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

**JSnack 7**

 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora

### BONUS

**JSnack 8**

 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usando il ciclo for per scorrere la stringa numerica

## Steps

**Steps JSnack 5:**

1. Inizializzare un array vuoto

2. Creare un ciclo do-while, che si ripeta per 6 volte e che abbia all'interno questi elementi:

    - Un prompt che chieda all'utente di inserire un numero

    - Un if che verifichi che il numero inserito dall'utente sia dispari, se lo è verrà pushato nell'array

    - Un contatore che viene incrementato ad ogni ripetizione del ciclo

**Steps JSnack 6:**

1. Chiedere all'utente di quanti numeri si vuole stampare il proprio cubo

2. Creare un ciclo for che vada da 0 a N e che calcoli e successivamente stampi i cubi dei numeri sopra citati

**Steps JSNack 7:**

1. All'interno di un for calcolare tutte le potenze di 2 che vadano da 0 a 999

2. Stampare tutti i risultati a schermo.

**Steps JSnack 8:**

1. Creare un ciclo do-while che richeda all'utente di inserire un numero di 4 cifre e che continui a ciclare fino a quando la lunghezza del numero inserito sia uguale a 4

2. Utilizzando il metodo `.split()` dividiamo la stringa e salviamo i singoli caratteri in un array

3. Con un ciclo for sommiamo gli elementi dell'array tra loro

4. Stampiamo il risultato a schermo

## References

