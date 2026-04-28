/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i principali datatype in js sono:number,string,boolean,undefined,null.
Immaginiamo una scatola vuota da rimepire,possiamo riempirla con qualsiasi cosa.
Prima bisogna darle un nome;chiamiamola Cassetto.In Cassetto possiamo riamprila con un NUMBER,un numero,per esempio con 17.
Possiamo riempirla con STRING,con una stringa,cioè una parola,una frase,per esempio con "ciao".
Possiamo riempirla con BOOLEAN,ovvero è come se chiedessimo qualcosa a cui bisogna rispondere vero o falso,con TRUE O FALSE.
Quando non abbiamo ancora deciso cosa mettere dentro la scatola sarà UNDEFINED,indefinito,non sappiamo ancora cosa c,è dentro.
Se invece vogliamo svuotarla perchè vogliamo riempirla con altro allora usiamo NULL. */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12
let y = 20
let somma = x+y
console.log(somma) 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 const name = "Cristian" 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

 let x = 12
let b = 4 
let sottrazione = x-b
console.log(sottrazione) 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

 let name1="john"
let name2 ="John"
let controllo = name1 !== name2
console.log(controllo +""+ typeof controllo)
let controllo2 = name1.toLowerCase()===name2.toLowerCase()
console.log(controllo2)

