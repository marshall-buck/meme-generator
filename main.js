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
// TODO: Rework for current styling
function appendImage(url, memeTop, memeBottom) {
  // Create card div and append to memesContainer
  const memeCard = document.createElement('div');
  memeCard.classList = 'meme-card';
  memesContainer.append(memeCard);
  // Create holder for image and append to memeCard
  const relHolder = document.createElement('div');
  relHolder.classList = 'relative-holder';
  memeCard.append(relHolder);
  // Cerate img tag and append to relHolder
  const img = document.createElement('img');
  img.src = url;
  relHolder.append(img);
  // Create textHolder and append to relHOlder
  const textHolder = document.createElement('div');
  textHolder.classList = 'text-holder text-center meme-text';
  relHolder.append(textHolder);
  // Always create the top p, and if form is empty set innerText to blank
  // this is so flex box will work correctly
  const topP = document.createElement('p');
  textHolder.append(topP);

  if (memeTop === '') topP.innerText = '';
  else topP.innerText = memeTop;
  // ONly need to add bottom text if text ils in form
  if (memeBottom !== '') {
    const bottomP = document.createElement('p');
    bottomP.innerText = memeBottom;
    textHolder.append(bottomP);
  }

  // Add card bottom container
  const cardBottom = document.createElement('div');
  cardBottom.classList = 'container-center card-bottom';
  memeCard.append(cardBottom);

  const rangeHolder = document.createElement('div');
  rangeHolder.setAttribute('class', 'range-input');
  cardBottom.append(rangeHolder);
  const label = document.createElement('label');
  label.for = 'font';
  label.innerText = 'Font Size Adjust';
  label.classList = "range-input";
  rangeHolder.append(label);
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.name = 'font';
  slider.min = ".25";
  slider.max = "2";
  slider.value = "1";
  slider.step = ".25";

  rangeHolder.append(slider);
  slider.addEventListener('input', sliderChange);



  // Add button with event listener
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete Me";
  cardBottom.append(deleteButton);
  deleteButton.addEventListener('click', deleteMeme);




}

function deleteMeme(e) {

  e.target.parentNode.parentNode.remove();
}

function sliderChange(e) {
  console.dir(e.target.parentNode.parentNode.previousElementSibling.lastChild);
  const text = e.target.parentNode.parentNode.previousElementSibling.lastChild;

  const value = e.target.value * 1.5;
  text.setAttribute('style', `font-size: ${value}rem;`);
}



