let inputs = document.querySelectorAll('.question input');
let inpu = document.querySelector('.ans')
let addBtn = document.querySelector('#btn-ajt');
let que = document.querySelector('.choice')
let dataAdd = []
let obj;
console.log(inpu.value);
//add event to the btn
addBtn.onclick = ()=>{
    let a = inputs[0].value
    let b = inputs[1].value
    let c = inputs[2].value
    let d = inputs[3].value
    let e = inputs[4].value
    let f = inputs[5].value
    let g = ''
    switch (g) {
        case a:
            console.log('good');
            break;
        case b:
            console.log('good');
            break;
        case c:
            console.log('good');
            break;  
        case d:
            console.log('good');
            break;  
        case e:
            console.log('good');
            break;  
        case f:
            console.log('good');
            break;  
        default: 
        drawUi();
        addData();
        empty();    
    }
}
function drawUi(){
    let data =  `
                            <p class="question">${inputs[0].value}</p>
                            <p class="answer-1" class="corAns">${inputs[1].value}</p>
                            <p class="answer-2" class="corAns">${inputs[2].value}</p>
                            <p class="answer-3" class="corAns">${inputs[3].value}</p>
                            <p class="answer-4" class="corAns">${inputs[4].value}</p>
                            <p class="rightAns" class="corAns">${inputs[5].value}</p>
                `
                console.log(inputs[0]);
    console.log(data);
    que.innerHTML += data
}
//empty the input after add to dom
function empty(){
    inputs.forEach((el)=>{
        el.value = ''
    })
}
//add data to array
function addData(){
    obj = {
    answer: inputs[0].value,
    question1: inputs[1].value,
    question2: inputs[2].value,
    question3: inputs[3].value,
    question4: inputs[4].value,
    rightAns: inputs[5].value
}

    dataAdd.push(obj)
    console.log(dataAdd);
    let test = JSON.stringify(dataAdd)
    localStorage.setItem('question and answer', test)
}