window.addEventListener("scroll", function(event){
    var top = this.scrollY;
    let navbar=this.document.querySelector("header");
    let button=this.document.querySelector("#start");
    let button1=this.document.querySelector("#sign");
    if(top>275)
    {
        navbar.style.backgroundColor="white"
        button.style.backgroundColor="#1a8917"
        button1.style.color="black"
    }
    else
    {
        
        navbar.style.backgroundColor="#ffc017"
        button.style.backgroundColor="black"
        button1.style.color="white"
    }
});