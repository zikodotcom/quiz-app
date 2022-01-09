        let qst = document.querySelectorAll('.question input')
        let btnAjt = document.getElementById('btn-ajt');
        let fnl = []
        let choice = document.querySelector('.choice')
        btnAjt.onclick = function(){
            pushArr()//push value to arr
            addUi()//add ui
            empty()//empty the input
        }
//push input value to array
function pushArr(){
                let obj = {
        question: qst[0].value,
        answer1: qst[1].value,
        answer2: qst[2].value,
        answer3: qst[3].value,
        answer4: qst[4].value,
        rightAns: ''
    }
    fnl.push(obj)
}
//empty the input after add to dom
function empty(){
    qst.forEach((el)=>{
        el.value = ''
    })
}
//add value from array to ui to pick the correct answer
function addUi(){
    let ui = fnl.map((itm)=>{
        return `
                            <p class="question">${itm.question}</p>
                            <p class="answer-1" onclick="add(event)" class="corAns">${itm.answer1}</p>
                            <p class="answer-2" onclick="add(event)" class="corAns">${itm.answer2}</p>
                            <p class="answer-3" onclick="add(event)" class="corAns">${itm.answer3}</p>
                            <p class="answer-4" onclick="add(event)" class="corAns">${itm.answer4}</p>         
            `
    }).join('')
    choice.innerHTML = ui
}
//add ui to final part
function addToFinal(){
    let final = document.querySelector('.final');
    let finals = choice.innerHTML
    final.innerHTML = finals
}
//chose the correct answer
let rightAns = document.querySelector('.corAns');
// function clicks(){
//     rightAns.onclick = function(e){
//     console.log(e.currentTarget);
// }
// }
// if (choice.hasChildNodes()){
//     console.log('good');
//         rightAns.onclick = function(e){
//     console.log(e.currentTarget);
// }
// }else{
//     console.log('not good');
// }

//testing
    function add(event){
        event.currentTarget.classList.toggle('right')
    }