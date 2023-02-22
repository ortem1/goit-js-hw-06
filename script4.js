let counterValue = document.querySelector('#value')
const addListenerBtn = document.querySelector('button[data-action="decrement"]')
const removeListenerBtn = document.querySelector('button[data-action="increment"]')

counter = 0;

addListenerBtn.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
})

removeListenerBtn.addEventListener('click', () => {
    counter -= 1;
    counterValue.textContent = counter;
})
