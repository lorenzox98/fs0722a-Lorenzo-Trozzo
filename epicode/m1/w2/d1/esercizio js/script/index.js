
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

function Persona(nome,cognome,nickname,password,conferma,nascita,indirizzo,telefono){
    this.nome=nome;
    this.cognome=cognome;
    this.nickname=nickname;
    this.password=password;
    this.conferma=conferma;
    this.nascita=nascita;
    this.indirizzo=indirizzo;
    this.telefono=telefono;
}

function Modulo()
{
    let profilo=new Persona(document.modulo.nome.value,document.modulo.cognome.value,document.modulo.nickname.value,document.modulo.password.value,
        document.modulo.conferma.value,document.modulo.nascita.value,document.modulo.indirizzo.value,document.modulo.telefono.value)
        console.log(profilo)
}
document.createComment





