let pre=document.getElementsByTagName("pre");
for (let elem of pre){
    elem.style.display="none";
}

let li=document.getElementsByTagName("li");
for (let elem of li){
    elem.style.cursor="pointer";
    elem.onclick=function(){
        let next=elem.nextElementSibling;
        if(next.style.display=="none"){
            next.style.display="block";
        }
        else{
            next.style.display="none";
        }
    }
}


if(localStorage.getItem("changePage")=="true"){
    localStorage.setItem("changePage", "false");

    setTimeout(function() {
        window.scrollBy(0, -50);
    }, 10);

    let id=localStorage.getItem("id");
    let scientist=document.getElementById(id);
    scientist.style.color="red";
}
