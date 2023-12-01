let pre=document.getElementsByTagName("pre");
for (let elem of pre){
    elem.style.height="0";
    elem.style.opacity="0";
    elem.style.margin="0";
}

const animation=[
    {
        margin: "20px 0",
        height: "auto",
        opacity: "1"
    },
    {
        height: "auto",
        opacity: "0.5"
    },
    {
        margin: "0",
        height: "0",
        opacity: "0"
    },
]

let li=document.getElementsByTagName("li");
for (let elem of li){
    elem.style.cursor="pointer";
    elem.onclick=function(){
        let next=elem.nextElementSibling;
        if(next.style.height=="0px"){
            next.style.height="auto";
            next.style.opacity="1";
            next.style.margin="20px 0";

            next.animate(
                animation,
                  {
                    duration: 500,
                    direction: "reverse"
                  },
            )
        }
        else{
            next.style.height="0";
            next.style.opacity="0";
            next.style.margin="0";

            next.animate(
                animation,
                  {
                    duration: 500,
                  },
            )
        }
    }
}