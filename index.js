
// count down
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");
const numberLbl = document.getElementById("numberLbl");

let count = 0;
incrementBtn.onclick = function(){
    count ++;
    numberLbl.textContent = count;
}
//document.getElementById("decrementBtn").onclick = function(){
    count --;
    numberLbl.textContent = count;
decrementBtn.onclick = function(){
    count--;
    numberLbl.textContent = count;
}
//document.getElementById("resetBtn").onclick = function(){
resetBtn.onclick = function(){   
count = 0;
    numberLbl.textContent = count;
}







