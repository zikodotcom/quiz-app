        let qst = document.querySelectorAll('.question input')
        let btnAjt = document.getElementById('btn-ajt');
        let fnl = []
        btnAjt.onclick = function(){
            pushArr()//push value to arr
            addUi()//add ui
        }
//push input value to array
function pushArr(){
    qst.forEach((el)=>{
                fnl.push(el.value)
                el.value = '';
            })
}
//add value from array to ui to pick the correct answer
function addUi(){
                let choice = document.querySelector('.choice')
            choice.innerHTML = `
                            <p class="question">${fnl[0]}</p>
                            <p class="answer-1">${fnl[1]}</p>
                            <p class="answer-2">${fnl[2]}</p>
                            <p class="answer-3">${fnl[3]}</p>
                            <p class="answer-4">${fnl[4]}</p>
                            <button>ajouter</button>           
            `
}
