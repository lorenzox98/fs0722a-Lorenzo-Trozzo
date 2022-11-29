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
    badge();
})
function badge(){
   let cards= document.querySelectorAll(".card");
   console.log(cards)
   let hot=document.createElement("b");
   hot.innerText="HOT";
   hot.style.color="red";
   for(let carta of cards)
   {
        carta.appendChild(hot);
   }

}