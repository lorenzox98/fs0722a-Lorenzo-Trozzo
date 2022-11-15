const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//Array di domande






let giuste=0;//conta risposte giuste
let sbagliate=0;

let i=1;//Indice che permette di scorrere larray di domande e passare alla porssima

//Script timer
var totaltime = 20;
function update(percent){
  var deg;
  if(percent<(totaltime/2)){
    deg = 90 + (360*percent/totaltime);
      $('.pie').css('background-image',
                'linear-gradient('+deg+'deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)'
               );
  } else if(percent>=(totaltime/2)){
          deg = -90 + (360*percent/totaltime);
          $('.pie').css('background-image',
                'linear-gradient('+deg+'deg, transparent 50%, #1fbba6 50%),linear-gradient(90deg, white 50%, transparent 50%)'
               );
          }
}

  var count = parseInt($('#time').text());
  myCounter = setInterval(function () {
    count-=1;
    $('#time').html(count);
      update(count);
    
    if(count==0){
      if(i==questions.length)
      {
        salva();
        window.location.href="risultati.html"
      }
      else{
        sbagliate++;//se il timer va a zero aggiungi una risposta sbagliata
      i++;//passo alla prossima domanda
      count=20;//resetto il timer a 20 secondi

      //Eliminazione domanda attuale e allocazione della successiva
      deleteQuestion();
      nextQuestion(questions,i-1);
      counterQuest(questions,i);
      nextAnswer(questions,i-1);
      update(count);//Riparte il timer
      }
      
    };
  }, 1000);
//Fine script timer


  //Prende tutti i bottoni che ci sono attualmente nella pagina e gli aggiunge un eventListner per passare all domanda successiva
  function listner()
  {
    
    let array=document.querySelectorAll("button")
    if(i!=questions.length)
    {
      for(let bottone of array)
      {
        bottone.addEventListener("click",()=>{
          i++;
          count=20;
          deleteQuestion();
          nextQuestion(questions,i-1);
          counterQuest(questions,i);
          nextAnswer(questions,i-1);
          update(count)
  
        })
      }
    }else
    {
      for(let bottone of array)
      {
        bottone.addEventListener("click",function(){
          salva();
          window.location.href="risultati.html"
        })
      }

    }
      
    }
    //quando arriviamo all ultima domanda salviamo in memoria d'ambiente la variabile che contiene il numero di risposte giuste
      //Reindirizzo l'utente alla pagina dei risultati
    
    
  



//Funzione che ci permette di inserire nell'html il titolo della domanda
function nextQuestion(domanda,i){
  
  let contain=document.querySelector("#question");
  let head=document.createElement("h1");
  head.style.marginBottom="5rem";
  head.innerText=domanda[i].question;
  contain.appendChild(head);
}

//Funzione che ci permette di aggiornare il contatore di domande in basso
function counterQuest(arr,i){
    let foot=document.querySelector('#foot');
    foot.className='testi';
    foot.innerText= 'Questions ' +[i ] + '/' + [arr.length];
}
//Funzione che ci permette di eliminare la domanda attuale per poi crearne una nuova
function deleteQuestion(){
document.querySelector('#risposte').innerText='';
document.querySelector('#question').innerText='';
     
}


//Funzione che ci permette di aggiungere i bottoni con le risposte alla pagina html
   function nextAnswer(risposta,i){
    let contain=document.querySelector('#risposte')
    //Caso in cui le domande sono a risposta multipla
    if(risposta[i].type=="multiple")
    {
      let correctAnswer = document.createElement('button')
      correctAnswer.innerText = risposta[i].correct_answer
  
      let incorrectAnswer0 = document.createElement('button')
      incorrectAnswer0.innerText = risposta[i].incorrect_answers[0]
  
      let incorrectAnswer1 = document.createElement('button')
      incorrectAnswer1.innerText = risposta[i].incorrect_answers[1]
  
      let incorrectAnswer2 = document.createElement('button')
      incorrectAnswer2.innerText = risposta[i].incorrect_answers[2]
      
      contain.appendChild(correctAnswer) 
      contain.appendChild(incorrectAnswer0) 
      contain.appendChild(incorrectAnswer1) 
      contain.appendChild(incorrectAnswer2)

      
      //Aggiungo degli eventListner per tener traccia delle risposte giuste
      let arr=[incorrectAnswer0,incorrectAnswer1,incorrectAnswer2];
      for(let bottone of arr)
      {
        bottone.addEventListener("click",function(){
          sbagliate++
        })
      }

      correctAnswer.addEventListener("click",function(){
        giuste++;
      })

      listner();
      
      //Caso in cui le domande sono Boolean
    }else{
      let  right=document.createElement('button')
      right.innerText = risposta[i].correct_answer
      let wrong=document.createElement('button')
      wrong.innerText = risposta[i].incorrect_answers
      contain.appendChild(right) 
      contain.appendChild(wrong)
      right.addEventListener("click",function(){
        giuste++
        
      })
      wrong.addEventListener("click",function(){
        wrong++
      })
      listner();

  }

}

//Istruzioni necessarie a visualizzare la prima domanda
nextQuestion(questions,i-1);
nextAnswer(questions,i-1);
counterQuest(questions,i);


//Funzioned che ci permette di salvare la variabile contenente le risposte giuste nella memoria d'ambiente
function salva()
{
  localStorage.setItem("risposteG",giuste)

}

//Setto musica di sottofondo
var myMusic = document.querySelector("#music");
	myMusic.volume = 3;