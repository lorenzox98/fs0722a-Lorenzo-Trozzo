function logaritmo()
{
    let a=Math.log(document.getElementById("numeri").value) //Leggo il valore del display ed esegue logaritmo
    document.getElementById("numeri").value = a; //torno al display il risultato del logaritmo
}
function cos()
{
    document.getElementById("numeri").value = Math.cos(document.getElementById("numeri").value); 
}
function sin()
{
    document.getElementById("numeri").value = Math.sin(document.getElementById("numeri").value); 
}
function tg()
{
    document.getElementById("numeri").value = Math.tanh(document.getElementById("numeri").value); 
}

function radice()
{
      //Leggo il valore del display ed esegue radice
    document.getElementById("numeri").value = Math.sqrt(document.getElementById("numeri").value);    //torno al display il risultato della radice
}
function cancella()
{
    let str=document.getElementById("numeri").value.slice(0,-1); //cancella ultimo carattere con metodo slice
    document.getElementById("numeri").value = str;
}


function pulisci(){       //Cancella tutto il display assegnando una stringa vuota
    let str="";
    document.getElementById("numeri").value = str;
}  

function aggCifra(elemento){    //Aggiunge cifra al display utilizzando l'attributo data nel tag HTML e il This che fa riferimento a quell'elemento
    let cifra=elemento.getAttribute("data"); 
    document.getElementById("numeri").value+=cifra;
}

function tot() //calcola il totale con la funzione eval che converte la stringa du caratteri in una stringa letta da js che quindi fa le operazioni che trova
{
    let numeri=document.getElementById("numeri");
    numeri.value=eval(numeri.value);
}