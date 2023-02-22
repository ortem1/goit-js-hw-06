const form = document.querySelector('.login-form')
const button = document.querySelector('button')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return console.log("Заполните все поля формы!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);

    email.value = ''
    password.value = ''
})
