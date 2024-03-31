const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const count = document.getElementById("count");
let c = 0;

increaseBtn.onclick = function()
{
    c += 1;
    count.textContent = c;
}

decreaseBtn.onclick = function()
{
    c -= 1;
    count.textContent = c;
}

resetBtn.onclick = function()
{
    c = 0;
    count.textContent = c;
}




