const inputEl = document.querySelector('#validation-input');
const length = inputEl.dataset.length

inputEl.addEventListener("blur", () => {
    
    if (inputEl.value.length = length) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    } 
    
    if (inputEl.value.length != length) {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
});


    