let startBtn = document.querySelector('.btn')//start btn
let btnNxt = document.querySelector('.btn-nxt')
let question = document.querySelector('.qustion')//ui question
let time = document.querySelector('.count')
let scoreDom = document.querySelector('.score')
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
    initiale();
    drawUi();
}
//function to incrimente by one and draw ui
function initiale(){
    init = setInterval(addOne, 1000);

}
function addOne(){
    if (count < 21){
        count += 1;
    time.innerHTML = count
        // console.log(count);
    }else{
        clearInterval(init)
        // count = -1;
        // console.log(count);
    }
    // console.log(count);
}
//draw ui
function drawUi(){
    let dataUi = `
                    <div class="option">
                        <p class="question">${qAndA[i].answer}</p>
                        <p class="answer-1" onclick="cheack(event)" class="corAns">${qAndA[i].question1}</p>
                        <p class="answer-2" onclick="cheack(event)" class="corAns">${qAndA[i].question2}</p>
                        <p class="answer-3" onclick="cheack(event)" class="corAns">${qAndA[i].question3}</p>
                        <p class="answer-4" onclick="cheack(event)" class="corAns">${qAndA[i].question4}</p>
                    </div>                
    `
    question.innerHTML = dataUi;
}
btnNxt.onclick = ()=>{
    i++;
    console.log(i);
    if (qAndA.length > i){
        initiale();
        count = 0;
        drawUi();
    }else{
        console.log('good');
    }
}
//cheak the right answer
function cheack(event){
    let ansClicked = event.currentTarget
    let correctAns = qAndA[i].rightAns//import right answer from array
    const option = document.querySelectorAll('.option p')
    for (let k = 0; k < option.length; k++){
        option[k].classList.add('disable')
    }
    clearInterval(init)
    if (ansClicked.textContent === correctAns){
        ansClicked.style.color = '#2EB086'
        score++
        scoreDom.innerHTML = score
    }else{
        ansClicked.style.color = '#B8405E'
        clearInterval(count)
        for (j = 0; j < option.length; j++){
            if (option[j].textContent == qAndA[i].rightAns){
                option[j].style.color = '#2EB086'
            }
        }
    }
}