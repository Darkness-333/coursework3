let pre=document.getElementsByTagName("pre");
for (let elem of pre){
    elem.style.display="none";
}

const animation=[
    {
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
        let img=next.getElementsByTagName("img")[0];
        if(next.style.display=="none"){
            next.style.display="block";

            img?.animate(
                [
                    {height: "0"},
                    {height: "300px"}
                ],
                {
                    duration:500
                }
            );

            next.animate(
                animation,
                  {
                    duration: 500,
                    direction: "reverse"
                  },
            );
        }
        else{
            img?.animate(
                [
                    {height: "300px"},
                    {height: "0"},
                ],
                {
                    duration:500
                }
            );

            setTimeout(() => {
                next.style.display="none";
            }, 500);


            next.animate(
                animation,
                  {
                    duration: 500,
                  },
            );
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