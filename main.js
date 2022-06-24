const submitBtn = document.querySelector('#meme-gen-form');




submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  appendImage();
  console.log(e);
});

function appendImage() {
  const memeHolder = document.querySelector('#meme-holder');
  const img = document.createElement('img');
  memeHolder.append(img);
  img.setAttribute('src', 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}