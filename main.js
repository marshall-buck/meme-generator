const form = document.querySelector('#meme-gen-form');
const memeHolderRow = document.querySelector('#meme-holder');





form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = form.elements.webAddress.value;

  const memeTop = form.elements.memeTop.value;

  const memeBottom = form.elements.memeBottom.value;
  console.log(url, memeTop, memeBottom);
  appendImage(url, memeTop, memeBottom);


  form.reset();
});

function appendImage(url, memeTop, memeBottom) {
  const meme = document.createElement('div');
  meme.setAttribute('class', ' col-4 position-relative');
  memeHolderRow.append(meme);


  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('class', 'img-fluid ');

  meme.append(img);

  const textHolder = document.createElement('div');
  textHolder.setAttribute('class', 'position-absolute top-0 start-0 bottom-0 end-0 p-3 text-white d-flex flex-column justify-content-between align-items-center');
  meme.append(textHolder);
  const topText = document.createElement('p');
  topText.setAttribute('class', 'text-wrap text-center');
  topText.innerText = memeTop;
  textHolder.appendChild(topText);
  const bottomText = document.createElement('p');
  bottomText.innerText = memeBottom;
  bottomText.setAttribute('class', 'text-wrap text-center');
  textHolder.appendChild(bottomText);





}