const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((elem) => {
    const ingredients = document.querySelector('ul')
    let li = document.createElement('li');
    li.textContent = elem;
    li.classList.add('item');
    ingredients.append(li)
})