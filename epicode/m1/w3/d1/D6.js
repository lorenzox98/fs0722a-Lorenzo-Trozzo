/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
{
    function area(a,b){
        let area=(a*b)/2;
        return area;
    }
    let a=area(11,12);
    console.log("l'area è: "+ a);
}

//Funzione Freccia
{


}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
{
    function crazySum(a,b){
        let sum;
        if(a==b)
        return sum=(a+b)*3;
        else
        return a+b;
    }
    //somma tra due numeri uguali
    let somma=crazySum(5,5);
    console.log(somma);
    //somma tra due numeri diversi
    somma=crazySum(5,6);
    console.log(somma);
}
    //Funzione Freccia
{

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
{
    function crazyDiff(a){
        let diff;
        if(a>19)
        return diff=(a-19)*3;
        else
        return diff=a-19;
    }
    //Differenza a>19
    let diff=crazyDiff(23);
    console.log(diff);
    //Differenza a<=19
    diff=crazyDiff(18);
    console.log(diff);
}
    //Funzione Freccia
{

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
    function boundary(n){
       if((n<=100 && n>=29) || n==400)
       return true;
       else
       return false;
    }

    //Funzione Freccia
    {

    }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
{
    function epify(s)
    {
        if(s=="EPICODE")
        return s;
        else
        return "EPICODE".concat(s);
    }
    console.log("Esercizio 5");
    let a="Ciao";
    let s=epify(a);
    console.log(s);
}
//Funzione Freccia
{

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
{
    function check3and7(n)
    {
        if(n<0)
        {
            console.log("il numero deve essere positivo");
            return;
        }
        if((n%3==0) || (n%7==0))
        console.log("verificato");
        else
        console.log("non verificato");
    }
    console.log("Esercizio 6")
    let a=4;
    check3and7(a);
}
//Funzione Freccia
{



}
 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(s)
{
    
    let s1=[];
    let j=0;
    for(i= s.length ;i>=0;i--)
    {
        s1[j]=s[i];
        j++;
    }
    return s1;
}
    console.log("Esercizio 7");
    let a=reverseString("Epicode");
    console.log(a);
    
//metodo 2
{
    function reverse(s)
    {
        let  st="";
        for(i=s.length;i>=0;i--){
            st=st.concat(s.charAt(i));
        }
        return  st;
    }
    
    console.log("Esercizio 7");
    let b=reverse("ciao");
    console.log(b);

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
let z=upperFirst("ciao mamma sto ");
console.log(z);

const upperFirstPhrase= function(str){
    let words= str.split(" ");
    let finalString=[];
    for(let i=0;i<words.length;i++)
    {
        let firstChar=words[i].charAt(0);
        let upperCaseChart=firstChar.toUpperCase();
        let cutString=words[i].slice(1);
        let finalWord=upperCaseChart+cutString;
        finalString.push(finalWord);
    }
    console.log(finalString.join(" "));
}
upperFirstPhrase("hello world");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(string)
{
    let s=string.slice(0,-1).slice(1);
    return s;
}
let stra=cutString("ciao");
console.log(stra);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/*
const giveMeRandom=function(n){
    const arr=[];
    for(let i=0;i<n;i++){
        arr.push(Math.floor(Math.random()*10));
        
    }
    return arr;
}
console.log("Esercizio 10");
console.log(giveMeRandom(5));
/* SCRIVI QUI LA TUA RISPOSTA */
