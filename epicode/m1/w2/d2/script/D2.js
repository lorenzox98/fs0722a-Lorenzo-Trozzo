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
 
 }
*/
{
  let stringa ="Domanda 1: I datatype 5 in javascript rappresentano il tipo di dato che stiamo utulizzando. I tipi di dato sono:Numero,Stringa,Array,Oggetto e Boolean. L'elemento numero è ovviamente formato da un valore numerico,Le stringhe sono formate da un insieme di caratteri che formano una parola o una frase, gli Array sono un insieme di piu variabili, identificate da un indice che parte da 0 fino a N(numero elementi dell'array). Gli oggetti sono un tipo di dato a cui diamo una o piu proprietà. infine il boolean è un tipo di dato che può assumere come valore solo TRUE o FALSE.";
  console.log(stringa);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  var name="Lorenzo";
  console.log("Domanda 2: il mio nome è ",name);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
{
  let a=12,b=20,sum=a+b;
  console.log("Domanda 3: La somma è",sum);
  
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
{
  let x=12;
  console.log("Domanda 4:",x);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
  name="Trozzo";
  const anni=24;
  console.log("Domanda 5: commentata");
  //anni=25;
  //console.log(anni); Verificando in console da Errore. Non si puo riassegnare un valore ad una costante
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
{
  let x=12, dif=4-x;
  console.log("Domanda 6: La differenza è :",dif);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
{
  let name1="john",name2="John";
  if(name1!=name2)
  console.log("I nomi sono diversi");
  let nomeMin=name2.toLowerCase();
  
  if(name1==nomeMin)
  console.log("i nomi sono uguali");
  
}
/* SCRIVI QUI LA TUA RISPOSTA */
