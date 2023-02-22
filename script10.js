const boxes = document.querySelector('#boxes')
const createButton = document.querySelector('button[data-create]')
const destroyButton = document.querySelector('button[data-destroy]')
const input = document.querySelector('input[type="number"]')
let amount = 0

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
    amount = input.value
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div')
        div.style.backgroundColor = getRandomHexColor()
        div.style.height = `${30 + i * 10}` + 'px'
        div.style.width = div.style.height
        boxes.append(div)
        console.log(div)
    }
    
}

createButton.addEventListener('click', () => {
    createBoxes()
})

function destroyBoxes() {
    let delEl = boxes.querySelectorAll('div')
    for (let i = 0; i < delEl.length; i += 1) {
        delEl[i].remove()
    }
}

destroyButton.addEventListener('click', () => {
    destroyBoxes()
})