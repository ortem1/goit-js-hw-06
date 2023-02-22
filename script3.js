const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.forEach((elem) => {
    const gallery = document.querySelector('ul')
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.setAttribute('src', elem.url)
    img.setAttribute('alt', elem.alt)

    img.width = 500

    li.append(img)
    gallery.append(li)
})