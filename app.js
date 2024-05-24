let gameSeql = [];
let userSqel = [];
let btns = ["red", "blue", "green", "yellow"];

let head = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
    if (!started) {
        console.log("Game has begun!!");
        started = true;
        lvlup();
    }
});

function flash(btn) {
    setTimeout(function() {
    btn.classList.remove("flash");
}, 500);
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}


function lvlup() {

    userSqel=[];
    level++;
    head.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random() * 4);
    let randCol = btns[randNum];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeql.push(randCol);
    console.log(gameSeql);
    setTimeout(()=>{
        flash(randBtn);
    },600);
}

function checkAns(idx){
    if(userSqel[idx]===gameSeql[idx]){
        if(userSqel.length==gameSeql.length){
            document.querySelector("body").style.backgroundColor="green";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);
            setTimeout(()=>{
                lvlup();
            },600);
        }
    }
    else{
        if(level<0){
            head.innerText="let the game begin first";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        }else if(level===0){
            head.innerText="let the game begin first!! \n press any key to start!!";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        }
    }
}

function btnCliked(){
    let btn=this;
    userCol=btn.getAttribute("id");
    userSqel.push(userCol);
    checkAns(userSqel.length-1);
    setTimeout(()=>{
        flash(btn);
    },250);
}

function reset(){
    started=false;
    gameSeql=[];
    userSqel=[];
    level=0;
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnCliked);
}
