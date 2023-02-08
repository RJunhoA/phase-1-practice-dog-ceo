// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgContainer = document.querySelector('#dog-image-container');
const breedsContainer = document.querySelector('#dog-breeds');

fetch(imgUrl)
    .then(r => r.json())
    .then(data => data.message.forEach(renderDogImg))

fetch(breedUrl)
    .then(r => r.json())
    .then(data => {
        const dogObj = data.message
        const dogArray = Object.keys(dogObj)
        dogArray.forEach(renderDogList)
    })

function renderDogList(dogArray) {
    const li = document.createElement('li')
    li.addEventListener('click', () => {
        if (li.style.color === 'black') {
            li.style.color = 'red'
        } else {
            li.style.color = 'black'
        }
    })
    li.innerText = dogArray
    breedsContainer.append(li)
}
function renderDogImg(dogArray) {
    const img = document.createElement('img')
    img.src = dogArray
    imgContainer.append(img)
}