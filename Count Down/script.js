const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay(){
    countEl.textContent = count;
}
incrementBtn.addEventListener('click', ()=>{
    count++;
    updateDisplay();
});
decrementBtn.addEventListener('click', ()=>{
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', ()=>{
    count = 0;
    updateDisplay();
});

updateDisplay();