let checkbox;
let n;
let cont;

window.onload=function(){
  checkbox=document.getElementById("menu-toggle");
  n=document.getElementsByTagName("nav");
  cont=document.getElementById("burger-container");

}


if(window.innerWidth<1200){
    console.log(checkbox);
    let isCheck=localStorage.getItem("check");
    if(isCheck=="true") checkbox.checked=true;
    else checkbox.checked=false;
    if(!checkbox.checked) n[0].style.display="none";
    else n[0].style.display="block";
}

checkbox.onclick=function(){
localStorage.setItem("check",checkbox.checked);
  if(!checkbox.checked) n[0].style.display="none";
  else n[0].style.display="block";
}

window.onresize = function() {
  if (window.innerWidth>1200){
    n[0].style.display="flex";
  }
  else{
    if(!checkbox.checked) n[0].style.display="none";
    else n[0].style.display="block";
  }
};