let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("stock")

let count = 0
let stock = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    stock+=count;
    totalEl.textContent = stock;
    countEl.textContent = 0
    count = 0
}
