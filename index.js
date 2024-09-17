const myh1=document.getElementById("myh1");
const yes=document.getElementById("yes");
const no=document.getElementById("no");

yes.onclick=function(){
    myh1.textContent="I love you too!!❤️😘";
    no.removeEventListener("mouseover",callback);
    no.disabled=true;

}

function callback(event){

    let rand1=Math.floor(Math.random()* (300-150+1)+150);
    let rand2=Math.floor(Math.random()* (500-350+1)+350);
    event.target.style.top=`${rand1+10}px`;
    event.target.style.left=`${rand2+10}px`;
}
no.addEventListener("mouseover",callback);

no.onclick=function(){
    myh1.textContent=`Why this much hatered!!🥲`
}