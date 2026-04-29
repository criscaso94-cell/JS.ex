//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 10
let n2 = 15
if(n1>n2){console.log("n1 è più grande di n2")}
else if{console.log("n2 è più grande di n1")}



/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let number = 4

if(number<5){
  console.log("Tiny");
}
else if(number<10){
  console.log("Small");
}
else if(number<15){
  console.log("Medium");
}
else if(number<20){
  console.log("Large");
}
else{
  console.log("Huge");
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
for(x=0;x<=10;x++){
  if(x===3||x===8){
    continue;
  }
  console.log(x)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for(let=i;x<=15;i++){
  if(i%2===0){
    console.log(i +" è PARI")
  }
  else{console.log(i + "è DISPARI")}
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 6
let b = 2
if(a===8||b===8){
  console.log("uno dei due numeri è uguale a 8");
}
else if(a+b===8){console.log("la somma di a e b è uguale a 8");}
else if (a-b===8||b-a===8){console.log("la sottrazione è pari a 8")}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 45
const spedizione = 10
const promozione = 50
if(totalShoppingCart>=promozione){
  console.log("spedizione gratis");
}
else {
  console.log("Spedizione a carico dell'utente,il totale è:" + (totalShoppingCart+spedizione))
}


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
const blackFriday = 0.80
if((totalShoppingCart*blackFriday>=promozione)){console.log("spedizione gratis")}
else(console.log("Spedizione a carico dell'utente,il totale è:" + (totalShoppingCart*0.80+spedizione)))

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true
let gender = isMale ? "male":"female"

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for(let xy=1;xy<=100;xy++){
  if(xy%3===0&&xy%5===0){
    console.log("FizzBuzz");
  }
  else if(xy%3===0){
    console.log("Fizz");
  }
  else if(xy%5===0){
    console.log("Buzz")
  }
}

for(let elenco=5;elenco>=1;elenco--)
{
  console.log(elenco)
}
for(let nun=1;nun<=10;nun++){
  if(nun%2===0){console.log(nun);}
  
}
let a = 10
while(a>=1){
  console.log(i)
  a--
}