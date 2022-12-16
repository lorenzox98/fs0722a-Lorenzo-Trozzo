
import { Persona } from './classi/persona.js';




async function loadJSON (url) {
    const res = await fetch(url);
    return await res.json();
  }
  
  loadJSON('./json/users.JSON').then(data => { 
    let k = 0
    let immagini=document.querySelectorAll(".img1");
    let array = document.querySelectorAll('.card-body')
    for (let dato of data) {
        let p=new Persona(dato.firstName,dato.lastName,dato.gender,dato.profileURL,dato.email);
        immagini[k].setAttribute("src",p.url);
        
        let name = p.nome + ' ' + p.cognome
        let nome = document.createElement('p')
        nome.innerText = name
        array[k].appendChild(nome)
        let mail = p.email
        let pMail = document.createElement('p')
        pMail.innerText = mail
        pMail.style.color='#fffd00';
        pMail.style.fontSize='1.3rem'
        array[k].appendChild(pMail);
        immagini[k].setAttribute("src",dato.profileURL)
        k++
    }
        
  });

  
  let confirm=document.querySelector(".confirm");
  confirm.addEventListener("click",function(){
    creaCard();
  })

  function creaCard(){

    //creazione card//
    let contenitore=document.querySelector(".contenitore");
    let div=document.createElement("div");
    const list= div.classList;
    list.add("card");
    list.add("col-6");
    list.add("md-col-12");
    list.add("align-items-center");
    let img=document.createElement("img");
    const list2= img.classList;
    list2.add("card-img-top");
    list2.add("img1");
    list2.add("w-25") ;
    let body=document.createElement("div");
    body.className="card-body";
    
    //fine creazione card


    //check sesso
    if(controllaSesso()=="m")
    {
        img.setAttribute("src","img/male.png")
    }
    else{
        img.setAttribute("src","img/female.png")
    }

    //valori dei campi imput
    let inputNome=document.querySelector(".nome");
    let inputCognome=document.querySelector(".cognome");
    let inputEmail=document.querySelector(".email");


    //creazione dei contenuti
    let nomeCompleto=document.createElement("p");
    nomeCompleto.innerText=inputNome.value+" "+ inputCognome.value;
    let email=document.createElement("p");
    email.innerText=inputEmail.value;
    email.style.color='#fffd00';
    email.style.fontSize='1.3rem'
    body.appendChild(nomeCompleto);
    body.appendChild(email);
    div.appendChild(img);
    div.appendChild(body);
    contenitore.appendChild(div);

  }



  function controllaSesso(){
    let sesso=document.querySelector(".gender");
    console.log(sesso.value)
    if(sesso.value=="male")
    {
        return "m";
    }
    
    else return "f";
  }