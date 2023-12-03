let nameList=["Исаак Ньютон", "Альберт Эйнштейн", "Мария Склодовская-Кюри","Чарльз Дарвин","Дмитрий Менделеев"]
let idList=["newton", "einstein", "curi", "darwin", "mendeleev"];

let search=document.getElementById("search");
let main=document.getElementById("main");


search.oninput=function(){



    let scientistDivs=document.querySelectorAll("main div");
    for (let elem of scientistDivs){
        elem.remove();
    }

    let text=search.value.toLowerCase();
    console.log(text.toLowerCase());
    for (let i=0;i<nameList.length;i++){
        if(text=="") break;
        let elem=nameList[i].toLowerCase();
        if(elem.includes(text)){
            createScientist(i);
        }
    }


}

function createScientist(index){
    let scientist=document.createElement("div");

    let name=document.createElement("p");
    name.textContent=nameList[index];
    scientist.appendChild(name);


    var button1 = createButton('Главное меню', idList[index], "Menu.html");
    var button2 = createButton('Биография', idList[index], "Biography.html");
    var button3 = createButton('Викторина', idList[index], "Quiz.html");
    scientist.appendChild(button1);
    scientist.appendChild(button2);
    scientist.appendChild(button3);

    main.appendChild(scientist);
}

function createButton(text, targetElementId, page) {
    var button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', function() {
        window.open(page+ '#' + targetElementId, '_blank');
        localStorage.setItem("changePage", "true");
        localStorage.setItem("id", targetElementId);
    });

    return button;
}







