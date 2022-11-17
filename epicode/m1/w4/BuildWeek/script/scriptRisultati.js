let giuste=localStorage.getItem("risposteG");
let sbagliate=10-giuste;
let percSbagliate=(sbagliate/10)*100
let percGiuste=(giuste/10)*100
let correct=document.querySelectorAll(".result")
console.log(correct)

let count=document.createElement("p");
count.innerText=giuste+"/10 Questions right";
count.style.textAlign="left";
count.className="testi";
let percent=document.createElement("p");
percent.innerText=percGiuste+"%";
percent.style.margin=0
percent.style.textAlign="left";
correct[0].appendChild(percent);
correct[0].appendChild(count);


let countW=document.createElement("p");
countW.innerText=sbagliate+"/10 Questions wrong";
countW.style.textAlign="right";
countW.className="testi";
let percentW=document.createElement("p");
percentW.innerText=percSbagliate+"%";
percentW.style.margin=0;
percentW.style.textAlign="right";
correct[1].appendChild(percentW)
correct[1].appendChild(countW);

let color;
let congratulazioni;
if(percGiuste>=60)
{
    
    color="#00FFFF"
    congratulazioni="You passed test, we'll send you the certificate";
}
else{
    
    color="#D20094"
    congratulazioni="Test don't passed"
}



window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
    backgroundColor:"transparent",
	animationEnabled: true,
    
    title:{text: congratulazioni,verticalAlign:"center",
        dockInsidePlotArea:true,fontSize:20,fontColor:color,maxWidth:150,padding:4},
    
    
	
	data: [{
        indexLabelFontColor:"white",
        
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		
		
		
		dataPoints: [
			{ y: percGiuste, color:"#00ffff" },
			{ y: percSbagliate,color:"#D20094"},
			
		]
	}]
});
chart.render();

}