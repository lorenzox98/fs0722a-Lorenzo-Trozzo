/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum=10+20        //creo una variabile somma e gli assegno la somma di 20 e 10
console.log("Esercizio 1:");
console.log("la somma è "+sum);   //mostro in console la variabile sum
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random=Math.floor(Math.random()*21); //assegno alla variabile random il valore generato e restituito dal metodo Math, ovvero un intero casuale da 0-20
console.log("Esercizio 2:");
console.log("il numero creato casualmente è "+random); //mostro in console la variabile random
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me={  //creo un oggetto chiamato "me", con le seguenti proprietà
  nome:"Lorenzo",
  surname:"Trozzo",
  age:24
}
console.log("Esercizio 3");
console.log("Ciao a tutti sono "+me.nome+" "+me.surname+" ed ho "+me.age+" anni"); //stampo i miei dati usando un interpolazione di stringhe
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
function removeField()
{
  delete me.age;
  console.log("Esercizio 4");
  console.log("Campo age eliminato");
  console.log(me);
}
removeField();
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills=["java","javascript"];
console.log("Esercizio 5");
console.log(me);
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Css");
console.log("Esercizio 6");
console.log(me);
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("Esercizio 7");
console.log(me);
console.log("//////////////////////////////////////////////////////");

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice(){
  let rand=0;
  do
  {
    rand=Math.floor(Math.random()*7);
  }while(rand===0)
  
  console.log(rand);
  return rand;
}
console.log("Esercizio 8");
dice();
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whiIsBigger(a,b){
  if(a>b)
  return a;
  else
  return b;
}
let a=whiIsBigger(12,14);
console.log("Esercizio 9");
console.log(a);
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa){
  let arr=stringa.split(" ");
  console.log("Esercizio 10");
  console.log(arr);
}
splitMe("ciao sto programmando js");
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(string,bool)
{
  if(bool)
    return string.slice(1);
  else  
    return string.slice(0,-1);
}
console.log("Esercizio 11");
console.log("Senza l'ultimo carattere:");
let stringa=deleteOne("javascript",false);
console.log(stringa);
console.log("Senza il primo carattere:");
stringa=deleteOne("javascript",true);
console.log(stringa);
console.log("//////////////////////////////////////////////////////");
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa)
{
  return stringa.replace(/\d/g, "");
}
console.log("Esercizio 12");
let b=onlyLetters("ciao a tutt5i");
console.log(b);
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str){
  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (str.match(validRegex)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("Invalid email address!");
    return false;
}
}
console.log("Esercizio 13");
let booleano=isThisAnEmail("lorist98@gmail.com");
console.log(booleano);
console.log("//////////////////////////////////////////////////////");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt()
{
  let arr=["domenica","lunedi","martedi","mercoledi","giovedi","venerdi","sabato"];
  let date= new Date();
  let i=date.getDay();
  let day=arr[i];
  console.log(day);
}
console.log("Esercizio 14");
whatDayIsIt();
console.log("//////////////////////////////////////////////////////");
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(n)
{
  let result;
  let somma={sum:0,values:[]};
  for(let i=0;i<n;i++)
  {
    result=dice();
    somma.sum+=result;
    somma.values[i]=result;
  }
  return somma;
}
console.log("Esercizio 15");
let somma=rollTheDices(4);
console.log(somma);
console.log("////////////////////////////////////////////////////////////")

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date){
  let date2=new Date();
  var difference = Math.floor((date2.getTime()-date.getTime())/86400000);
  return difference;
}
let date1=new Date("1998/07/05")
let day=howManyDays(date1);
console.log("Esercizio 16");
console.log(day);
console.log("////////////////////////////////////////////////////////////")
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday()
{
  let a=new Date();
  var birthday = '5 luglio 1998'
  if(a == birthday){
    return true;
  }else{
    return false;
  }
}
console.log("Esercizio 17");
console.log(isTodayMyBirthday());
console.log("////////////////////////////////////////////////////////////")

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
  //L'HO SPOSTATO SOTTO PERCHE INTERFERIVA CON UN ALTRO ESERCIZIO

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies)
{
  let max=0;
  let i=0;
  let indice;
  for(let movie of movies)
  {
    if(movie.Year>max)
    {
      max=movie.Year;
      indice=i;
    }
    i++;
  }
  return movies[indice];
}
console.log("Esercizio 19");
console.log("Il film piu recente è: ");
console.log(newestMovie(movies));
console.log("////////////////////////////////////////////////////////////")

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies)
{
  return movies.length;
}
console.log("Esercizio 20");
console.log("Il numero di film è: ");
console.log(countMovies(movies));
console.log("////////////////////////////////////////////////////////////")

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies)
{
  let i=0;
  let arr=[];
  for(let movie of movies)
  {
   arr[i]=movie.Year;
   i++;
  }
  return arr;
}
console.log("Esercizio 21");
console.log("Array con gli anni: ");
console.log(onlyTheYears(movies));
console.log("////////////////////////////////////////////////////////////")
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies)
{
  const risultato=movies.filter(film=>{
    return film.Year<2000;
  })
  return risultato;
}
console.log("Esercizio 22");
console.log("Array con gli anno minore di 2000: ");
console.log(onlyInLastMillennium(movies));
console.log("////////////////////////////////////////////////////////////")
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies)
{
  let sum=0;
  for(let film of movies)
  {
    sum+=film.Year;
  }
  return sum;
}
console.log("Esercizio 23");
console.log("La somma degli anni è: ");
console.log(sumAllTheYears(movies));
console.log("////////////////////////////////////////////////////////////");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(string,movies)
{
  const risultato=movies.filter(film=>{
    return film.Title.includes(string);
  })
  return risultato;
}

console.log("Esercizio 24");
console.log("i film che contengono la stringa sono:: ");
console.log(searchByTitle("the",movies));
console.log("////////////////////////////////////////////////////////////");

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(prop,obj)
{
  
   delete obj[prop];
   return obj;
}
console.log("Esercizio 18");
console.log(deleteProp("Title",movies[0]));
console.log("////////////////////////////////////////////////////////////")
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(string,movies)
{
  let obj={match:[],unmatch:[]};
  let i=0,j=0;
  
    for(let movie of movies)
    {
      if(movie.Title.includes(string))
      {
        obj.match[i]=movie.Title;
        i++;
      }
      else
      {
        obj.unmatch[j]=movie.Title;
        j++;
      }
    }
  return obj;
}
console.log("Esercizio 19");
searchAndDivide("the",movies);
console.log("////////////////////////////////////////////////////////////")

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index,movies)
{
   movies.splice(index,1);
   return movies;
}
console.log("Esercizio 26");
console.log(removeIndex(0,movies));
console.log("////////////////////////////////////////////////////////////");
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function setContainer()
{
  let cont=document.getElementById("container")
}
console.log("Esercizio 27");
console.log("////////////////////////////////////////////////////////////");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selAll()
{
  let td=document.querySelectorAll("td");
}
console.log("Esercizio 28");
console.log("////////////////////////////////////////////////////////////");


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function cicla()
{
  let arr=document.querySelectorAll("td");
  for(let td of arr)
  {
    console.log(td.innerText);
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function colora()
{
  let arr=document.querySelectorAll("a");
  for(let a of arr)
  {
    a.style.backgroundColor="red";
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addLi()
{
  let lista=document.querySelector("#myList");
  let li=document.createElement("li");
  li.innerText="Nuovo elemento della lista";
  lista.appendChild(li);
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuota()
{
  var lista = document.querySelector("#myList");
  lista.parentNode.removeChild(lista);
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addTr(){
  let arr=document.querySelectorAll("tr");
  for(let tr of arr)
  {
    tr.className="test";
  }
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(n){
  let primo=true;
  for(let i=2;i<100;i++)
  {
    if(n%i==0 && i!=n)
    primo=false;
  }
  return primo;
}
console.log("Extra")
console.log(isItPrime(6));
/* Questo array viene usato per gli esercizi. Non modificarlo. */








