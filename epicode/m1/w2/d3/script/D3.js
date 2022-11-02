/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function Maggiore(a,b)
{
  if(a>b)
  return a;
  else if(b>a)
  return b;
  else
  console.log("I due numeri sono Uguali");
}

console.log("Domanda 1:")
let x=4,y=6,z=4;
let max;
max=Maggiore(x,y);
console.log("il massimo è",max);
max=Maggiore(x,z);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function NotEqual(x)
{
  if(x!=5)
  console.log("not equal");
}
console.log("Domanda 2:")

let equal=6;
NotEqual(equal);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function Modulo(m)
{
  if(m%5==0)
  console.log(m," è divisibile per 5");
}
{
  console.log("Domanda 3:")
  let m=25;
  Modulo(m);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function Otto(a,b)
{
if(a==8 || b==8 || a+b==8 || a-b==8 || b+a==8 || b-a==8)
  console.log("OTTOOOOOOO");
}
{
  console.log("Domanda 4:")

  let a=15,b=7;
  Otto(a,b);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
function Carrello(saldo)
{
  let tsc;
  if(saldo>50)
  tsc=saldo;
  else
  tsc=saldo+10;
  return tsc;
}

{
  console.log("Domanda 5:")
  let saldo=60,tsc,tsc1,saldo1=40;
  tsc=Carrello(saldo);
  console.log(tsc);
  tsc1=Carrello(saldo1);
  console.log(tsc1);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
function Carrello2(saldo)
{
  let tsc;
  if(saldo>50)
  tsc=saldo;
  else
  tsc=saldo+10;
  return tsc;
}
function calcolaPerc(tot,num) {
  return ((num/tot) * 100);
}
{
  console.log("Domanda 6:")
  let saldo=100,tsc,tsc1,saldo1=50,perc,perc2;
  perc=calcolaPerc(saldo,20);
  saldo-=perc;
  tsc=Carrello2(saldo);
  console.log(tsc);
  perc2=calcolaPerc(saldo1,20);
  saldo1=saldo1-perc2;
  tsc1=Carrello2(saldo1);
  console.log(tsc1);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
function order(a,b,d)
{
  
}
{
  let a=5,b=2,c=7;
  order(a,b,c);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function tipo(x)
{
  if(typeof(x)=="number")
  console.log("Numero!");
  else
  console.log("Non e un numero!");
}
{
  console.log("Domanda 8:");
  let a="ciao";
  tipo(a);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function pari(a)
{
  if((a%2)==0)
  console.log(a," è pari");
  else
  console.log(a," è dispari");
}
{
  console.log("Domanda 9:");
  let a=3;
  pari(a);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log("Domanda 11:");
me.city="Toronto";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
