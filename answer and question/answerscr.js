let startBtn = document.querySelector('.btn')//start btn
let question = document.querySelector('.qustion')//ui question
let content = document.querySelector('.content')//ui question
let time = document.querySelector('.count')
let scoreDom = document.querySelector('.score')
let info = document.querySelector('.info')
let option = document.querySelectorAll('.option p')

let i = -1//intial value for itterate inside array
// let j = i += 1//affectation
let qAndA = JSON.parse(localStorage.getItem('question and answer'))//import question from localstorage
let init;
let count = 0;
let score = 0;
let scr = document.querySelector('.score')
console.log(qAndA);
//listener about click event for btn start
startBtn.onclick = () =>{
    i++;
    startBtn.style.display = 'none';
    initiale();
    drawUi();
    setTimeout(line,500)
    content.style.display = 'block'
}
//function to incrimente by one and draw ui
function initiale(){
    init = setInterval(addOne, 1000);

}
function addOne(){
    let btnNxt = document.querySelector('.btn-nxt')
    if (count < 15){
        count += 1;
    time.innerHTML = count
    }else{
        clearInterval(init)
        btnNxt.style.display = 'block'
    }
    // console.log(count);
}
//draw ui
function drawUi(){
    let dataUi = `
                    <div class="option">
                        <p class="question">${qAndA[i].answer}?</p>
                        <p class="answer-1" onclick="cheack(event)" class="corAns">${qAndA[i].question1}</p>
                        <p class="answer-2" onclick="cheack(event)" class="corAns">${qAndA[i].question2}</p>
                        <p class="answer-3" onclick="cheack(event)" class="corAns">${qAndA[i].question3}</p>
                        <p class="answer-4" onclick="cheack(event)" class="corAns">${qAndA[i].question4}</p>
                    </div>  
            <button class="btn-nxt" onclick="nxtBtn(event)" style="display: none;">Next question</button>
    `
    question.innerHTML = dataUi;
}
    function nxtBtn(){
    i++;
    if (qAndA.length > i){
        initiale();
        count = 0;
        drawUi();
        line()
    }else{
        typeScore()
    }
}
//cheak the right answer
function cheack(event){
    let btnNxt = document.querySelector('.btn-nxt')
    btnNxt.style.display = 'block'
    let ansClicked = event.currentTarget
    let correctAns = qAndA[i].rightAns//import right answer from array
    const option = document.querySelectorAll('.option p')
    for (let k = 0; k < option.length; k++){
        option[k].classList.add('disable')
    }
    clearInterval(init)
    if (ansClicked.textContent === correctAns){
        ansClicked.classList.toggle('correct')
        score++
        scoreDom.innerHTML = score
    }else{
        ansClicked.classList.toggle('incorrect')
        clearInterval(count)
        for (j = 0; j < option.length; j++){
            if (option[j].textContent == qAndA[i].rightAns){
                option[j].classList.toggle('correct')
            }
        }
    }
    for(let j = 1; option.length; j++){
        option[j].classList.add('disabled')
    }
}
function line(){
    let width = i + 1;
            let numAnswer = (width * 100) / (qAndA.length)
        document.documentElement.style.setProperty('--width', `${numAnswer}%`)
        console.log(numAnswer)
        console.log(document.documentElement.style)
}
function typeScore(){
    let scoreUI = `
    <p>Your score is ${score}</p>
    <p>Thanks for your participing</p>
    `
    question.innerHTML = scoreUI
    info.remove()
}