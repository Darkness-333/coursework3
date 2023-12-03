const newtonQ=[
{
    q: "Кем был отец Ньютона?",
    a: [
        { text: "Фермером", isCorrect: true },
        { text: "Ученым", isCorrect: false },
        { text: "Учителем", isCorrect: false },
    ]
},
{
    q: "Где учился Ньютон?",
    a: [
        { text: "Оксфорд", isCorrect: false },
        { text: "Парижский", isCorrect: false },
        { text: "Кембридж", isCorrect: true },
    ]
},
{
    q: "Где умер Ньютон?",
    a: [
        { text: "Париж", isCorrect: false },
        { text: "Лондон", isCorrect: false },
        { text: "Кенсингтон", isCorrect: true },
    ]
},
]

const einsteinQ=[
    {
        q: "Где родился Эйнштейн?",
        a: [
            { text: "Италия", isCorrect: false },
            { text: "Германия", isCorrect: true },
            { text: "Англия", isCorrect: false },
        ]
    },
    {
        q: "В каком году Эйнштейн закончил обучение?",
        a: [
            { text: "1900", isCorrect: true },
            { text: "1910", isCorrect: false },
            { text: "1920", isCorrect: false },
        ]
    },
    {
        q: "Что является трудом Эйнштейна?",
        a: [
            { text: "Теория тяготения", isCorrect: false },
            { text: "Теория струн", isCorrect: false },
            { text: "Теория относительности", isCorrect: true },
        ]
    },
]

const curiQ=[
    {
        q: "В какой семье родилась Кюри?",
        a: [
            { text: "Бедной", isCorrect: true },
            { text: "Среднего достатка", isCorrect: false },
            { text: "Богатой", isCorrect: false },
        ]
    },
    {
        q: "Как звали мужа Кюри?",
        a: [
            { text: "Эрнест", isCorrect: false },
            { text: "Петр", isCorrect: false },
            { text: "Пьер", isCorrect: true },
        ]
    },
    {
        q: "В какой области Кюри получила вторую Нобелевскую премию?",
        a: [
            { text: "Физика", isCorrect: false },
            { text: "Литература", isCorrect: false },
            { text: "Химия", isCorrect: true },
        ]
    },
]

const darwinQ=[
    {
        q: "Кем был отец Дарвина?",
        a: [
            { text: "Финансистом", isCorrect: false },
            { text: "Врачем", isCorrect: false },
            { text: "Все варианты верны", isCorrect: true },
        ]
    },
    {
        q: "Что нравилось Дарвину в детстве?",
        a: [
            { text: "Литература", isCorrect: false },
            { text: "Математика", isCorrect: false },
            { text: "Биология", isCorrect: true },
        ]
    },
    {
        q: "В каком году умер Дарвин?",
        a: [
            { text: "1801", isCorrect: false },
            { text: "1865", isCorrect: false },
            { text: "1882", isCorrect: true },
        ]
    },
]

const mendeleevQ=[
    {
        q: "Каким ребенком по счету был Менделеев?",
        a: [
            { text: "2", isCorrect: false },
            { text: "17", isCorrect: true },
            { text: "5", isCorrect: false },
        ]
    },
    {
        q: "Какая болезнь была у Менделеева?",
        a: [
            { text: "Туберкулез легких", isCorrect: true },
            { text: "Диабет", isCorrect: false },
            { text: "Сколиоз", isCorrect: false },
        ]
    },
    {
        q: "Какое уравнение разработал Менделеев?",
        a: [
            { text: "Уравнение касательной", isCorrect: false },
            { text: "Кинетическое уравнение", isCorrect: false },
            { text: "Уравнение состояния идеального газа", isCorrect: true },
        ]
    },
]


let Questions=newtonQ;
const scList=document.getElementById("scientist-list");

scList.onchange=function(){
    switch (this.value){
        case "newton":
            Questions=newtonQ;
            break;
        case "einstein":
            Questions=einsteinQ;
            break;
        case "curi":
            Questions=curiQ;
            break;
        case "darwin":
            Questions=darwinQ;
            break;
        case "mendeleev":
            Questions=mendeleevQ;
            break;
    }
}

 
let currQuestion = 0;
let score = 0;

let scoreDiv=document.getElementById("score");
let panelDiv=document.getElementById("panel");
function start(){
    currQuestion = 0;
    score = 0;
    panelDiv.style.display="flex";
    scoreDiv.style.display="none";
    loadQues();
}
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        
        choiceLabel.prepend(choice);
        choicesdiv.append(choiceLabel);
        opt.append(choicesdiv);
    }

    btnCheck.style.display="block";
    btnNext.style.display="block";
}
 
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `Правильных ответов: ${score} / ${Questions.length}`
}
 
let answered=false;
 
function nextQuestion() {
    if(answered){
        answered=false;
        if (currQuestion < Questions.length - 1) {
            currQuestion++;
            loadQues();
        } else {
            panelDiv.style.display="none";
            scoreDiv.style.display="block";
            loadScore();
        }
    }
    else{
        alert("Выберите ответ и проверьте его");
    }
}
 
function checkAns() {
    if(!answered){
        answered=true;
        let userAns=document.querySelector('input[name="answer"]:checked');
        userAns.parentElement.style.color="red";
        const selectedAns = parseInt(userAns.value);
        if (Questions[currQuestion].a[selectedAns].isCorrect) {
            score++;
        } 

        let variants=document.querySelectorAll('input[name="answer"]');

        for (let i=0; i<Questions[currQuestion].a.length;i++){
            if(Questions[currQuestion].a[i].isCorrect){
                for (let elem of variants){
                    if(elem.value==i.toString()){
                        elem.parentElement.style.color="rgb(0,255,0)";
                    }
                    elem.disabled=true;
                }
            }
        }
    }

}


if(localStorage.getItem("changePage")=="true"){
    localStorage.setItem("changePage", "false");

    setTimeout(function() {
        window.scrollBy(0, -50);
    }, 10);

    let id=localStorage.getItem("id");
    let option=document.querySelector(`option[value="${id}"]`)
    option.selected=true;

    switch (scList.value){
        case "newton":
            Questions=newtonQ;
            break;
        case "einstein":
            Questions=einsteinQ;
            break;
        case "curi":
            Questions=curiQ;
            break;
        case "darwin":
            Questions=darwinQ;
            break;
        case "mendeleev":
            Questions=mendeleevQ;
            break;
    }
}