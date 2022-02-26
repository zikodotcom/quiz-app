let inputs = document.querySelectorAll('.question .form input');
let inpu = document.querySelector('.ans')
let addBtn = document.querySelector('#btn-ajt');
let que = document.querySelector('.choice')
let dataAdd = []
let obj;
let handle = false;
//add event to the btn

addBtn.onclick = ()=>{
    let a = inputs[0]
    let b = inputs[1]
    let c = inputs[2]
    let d = inputs[3]
    let e = inputs[4]
    let f = inputs[5]
    let g = ''
    switch (g) {
        case a.value:
            a.style.border = '4px solid rgb(247 138 138)';
            break;
        case b.value:
            b.style.border = '4px solid rgb(247 138 138)';
            break;
        case c.value:
            c.style.border = '4px solid rgb(247 138 138)';
            break;  
        case d.value:
            d.style.border = '4px solid rgb(247 138 138)';
            break;  
        case e.value:
            e.style.border = '4px solid rgb(247 138 138)';
            break;  
        case f.value:
            f.style.border = '4px solid rgb(247 138 138)';
            break;  
        default: 
        drawUi();
        addData();
        empty();    
    }
}


function drawUi(){
    let num = 0;
    num++
    let data =  `
                            <div class="each-question">
                                <p class="question">${num}${inputs[0].value}?</p>
                            <p class="answer-1" class="corAns">${inputs[1].value}</p>
                            <p class="answer-2" class="corAns">${inputs[2].value}</p>
                            <p class="answer-3" class="corAns">${inputs[3].value}</p>
                            <p class="answer-4" class="corAns">${inputs[4].value}</p>
                            <p class="rightAns" class="corAns">${inputs[5].value}</p>
                            </div>
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

