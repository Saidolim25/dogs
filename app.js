const list = document.querySelector('list')



const rasm = document.getElementById('rasm')


const url = 'https://dog.ceo/api/breeds/image/random'

function fetchImg(url){
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const img = data.message;
    rasm.src = img;
  })
}

fetchImg(url)
