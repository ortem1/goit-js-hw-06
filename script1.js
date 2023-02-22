const categories = document.querySelectorAll('.item')
console.log("Количество категорий:", categories.length)

categories.forEach((elem) => {
    let category = elem.querySelector('h2').textContent;
    let categoryQuantity = elem.querySelectorAll('li');
    let categoryLength = categoryQuantity.length;

    console.log('Категория:', category);
    console.log('Количество элементов:', categoryLength);
})