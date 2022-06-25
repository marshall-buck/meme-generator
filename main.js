const form = document.querySelector('#meme-gen-form');
const memesContainer = document.querySelector('.meme-container');





form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = form.elements.webAddress.value;

  const memeTop = form.elements.memeTop.value;

  const memeBottom = form.elements.memeBottom.value;

  if (!url) {
    window.alert("You need ot enter a url");
    form.reset();
    return;
  }
  appendImage(url, memeTop, memeBottom);




  form.reset();
});

function appendImage(url, memeTop, memeBottom) {
  // Create card div and append to memesContainer
  const memeCard = document.createElement('div');
  memeCard.setAttribute('class', 'meme-card');
  memesContainer.append(memeCard);
  // Create holder for image and append to memeCard
  const relHolder = document.createElement('div');
  relHolder.setAttribute('class', 'relative-holder');
  memeCard.append(relHolder);
  // Cerate img tag and append to relHolder
  const img = document.createElement('img');
  img.setAttribute('src', url);
  relHolder.append(img);
  // Create textHolder and append to relHOlder
  const textHolder = document.createElement('div');
  textHolder.setAttribute('class', 'text-holder text-center meme-text');
  relHolder.append(textHolder);

  const topP = document.createElement('p');
  textHolder.append(topP);

  if (memeTop === '') topP.innerText = '';
  else topP.innerText = memeTop;

  if (memeBottom !== '') {
    const bottomP = document.createElement('p');
    bottomP.innerText = memeBottom;
    textHolder.append(bottomP);
  }







}

function deleteMeme(e) {
  console.log(e);
}