
/*
var nome = document.modulo.nome.value;
var cognome = document.modulo.cognome.value;
var nickname = document.modulo.nickname.value;
var password = document.modulo.password.value;
var conferma = document.modulo.conferma.value;
var nascita = document.modulo.nascita.value;
var indirizzo = document.modulo.indirizzo.value;
var telefono = document.modulo.telefono.value;
*/

class Persona{
    constructor(nome,cognome,nickname,password,conferma,nascita,indirizzo,telefono){
        this.nome=nome;
        this.cognome=cognome;
        this.nickname=nickname;
        this.password=password;
        this.conferma=conferma;
        this.nascita=nascita;
        this.indirizzo=indirizzo;
        this.telefono=telefono;
       
        
    }
   
 
    //Setter
    setNome(a)
    {
        this.nome=a;
    }
    setCognome(a)
    {
        this.cognome=a;
    }
    setNickname(a)
    {
        this.nickname=a;
    }
    setPassword(a)
    {
        this.password=a;
    }
  
}
var b=3;

var profilo=new Persona();
function Modulo()
{
    console.log(b);
         profilo.nome=document.modulo.nome.value;
         profilo.cognome=document.modulo.cognome.value;
         profilo.nickname=document.modulo.nickname.value;
         profilo.password=document.modulo.password.value;
         profilo.conferma=document.modulo.conferma.value;
         profilo.nascita=document.modulo.nascita.value;
         profilo.indirizzo=document.modulo.indirizzo.value;
         profilo.telefono=document.modulo.telefono.value;

         /*=new Persona(document.modulo.nome.value,document.modulo.cognome.value,document.modulo.nickname.value,document.modulo.password.value,
        document.modulo.conferma.value,document.modulo.nascita.value,document.modulo.indirizzo.value,document.modulo.telefono.value);
        var a='marco';
        profilo.setNome(a);
        console.log(profilo)*/    
}



/*function Prova(){
    var pi= document.createElement("p");
    pi.innerHTML="ciao";
    document.body.appendChild(pi);
}

//let p=new Persona();

*/




