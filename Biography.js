let pre=document.getElementsByTagName("pre");
for (let elem of pre){
    // elem.style.height="0";
    // elem.style.opacity="0";
    // elem.style.margin="0";
    // elem.style.fontSize="0";
    elem.style.display="none";

}

const animation=[
    {
        // dispalay: "block",
        margin: "20px 0",
        height: "auto",
        opacity: "1",
        fontSize: "15pt"
    },
    {
        height: "auto",
        opacity: "0.5",
        fontSize: "0"

    },
    {
        margin: "0",
        height: "0",
        opacity: "0",
        fontSize: "0"
    },
]

let li=document.getElementsByTagName("li");
for (let elem of li){
    elem.style.cursor="pointer";
    elem.onclick=function(){
        let next=elem.nextElementSibling;
        console.log(next.textContent);
        if(next.style.display=="none"){
            // next.style.height="auto";
            // next.style.opacity="1";
            // next.style.margin="20px 0";
            // next.style.fontSize="15pt";
            next.style.display="block";

            next.animate(
                animation,
                  {
                    duration: 500,
                    direction: "reverse"
                  },
            )
        }
        else{
            // next.style.height="0";
            // next.style.opacity="0";
            // next.style.margin="0";
            // next.style.fontSize="0";
            setTimeout(() => {
                next.style.display="none";
            }, 500);


            next.animate(
                animation,
                  {
                    duration: 500,
                  },
            )
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