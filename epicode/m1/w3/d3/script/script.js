 

 
 // Aggiunge la riga cliccando sull elemento con un event listner
 var list = document.querySelector('ul');
 list.addEventListener('click', function(ev) {
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');//aggiungi alla classe css checked il li cliccato
   }
 }, false);
 

 
 // crea un nuovo elemento della lista premendo add
 function newElement() {
   var li = document.createElement("li"); //creo un elemento del dom con un li
   var inputValue = document.getElementById("myInput").value;//metto in inputValue il testo che l'utente ha scritto nel campo di testo
   var t = document.createTextNode(inputValue);//creo un nodo html e lo metto nella variabile t
   li.appendChild(t);//aggiungo il testo al li creato in precedenza
   if (inputValue === '') {
     alert("Devi scrivere qualcosa");
   } else {
     document.getElementById("myUL").appendChild(li); //se il campo pasasto è diverso da null lo aggungo alla lista
   }



   //ripristino vuoto il campo di inserimento
   document.getElementById("myInput").value = "";
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 } 



 //elimina li
 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }