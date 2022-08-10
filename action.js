const captureBtn = document.getElementById("captureBtn");

function ID(id){
    return document.getElementById(id);
}


var point = 1000;
ID("scoreScreen").innerText = point;


captureBtn.addEventListener("mouseover",(x,y)=>{
    x = (Math.random()*window.innerWidth-100)+150;
    y = Math.random()*700;
    captureBtn.style.top = y+"px";
    captureBtn.style.left = x+"px";
    point = point-100
    ID("scoreScreen").innerText = point;

    if(point<=0){
        captureBtn.style.display ="none";
        ID("lose").style.display = "flex";
        ID("loseScore").innerText ="Your Point : "+ point;
    }
})


captureBtn.addEventListener("click", ()=>{
    captureBtn.style.display="none";
    ID("lose").style.display = "flex";
    ID("loseScore").innerText ="Congratulations : "+ point;
})


 ID("loseBtn").addEventListener("click", ()=>{
     point = 1000;
     ID("scoreScreen").innerText = point;
     captureBtn.style.display="initial";
     ID("lose").style.display="none";
 });