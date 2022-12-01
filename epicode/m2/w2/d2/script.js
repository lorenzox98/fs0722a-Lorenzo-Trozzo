let viaggio=document.querySelectorAll(".viaggio")
console.log(viaggio.length)
alert("Ci sono attualmente "+viaggio.length+" offerte disponibili")

function removeCards(){
    let cards=document.querySelectorAll(".card")
    for(let card of cards)
    {
        card.innerHTML="";
        card.style.border="0"
    }
}
let remove=document.querySelector("#remove")
remove.addEventListener("click",function(){
   removeCards();
    console.log("ciao");
})
function badge(){
   let cards= document.querySelectorAll(".card");
   console.log(cards)
   
   
   for(let carta of cards)
   {
        let hot=document.createElement("b");
        hot.innerText="HOTTTTT";
        hot.style.color="red";
        hot.style.marginLeft= "1rem";
        carta.appendChild(hot);
        console.log(carta);
   }

}
let add=document.querySelector("#hot")
add.addEventListener("click",function(){
   badge();
    console.log("ciao");
})