const newtonQ=[
{
    q: "newton?",
    a: [
        { text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
    ]
},
{
    q: "What is capital of India?",
    a: [
        { text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
    ]
},
{
    q: "What is capital of India?",
    a: [
        { text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
    ]
},
]

const einsteinQ=[
    {
        q: "einstein?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
]

const curiQ=[
    {
        q: "curi?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
]

const darwinQ=[
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
]

const mendeleevQ=[
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
        ]
    },
    {
        q: "What is capital of India?",
        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
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