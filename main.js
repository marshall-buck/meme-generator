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
  // Only need to add bottom text when true
  if (memeBottom !== '') {
    const bottomP = document.createElement('p');
    bottomP.innerText = memeBottom;
    textHolder.append(bottomP);
  }

  // Add card bottom container
  const cardBottom = document.createElement('div');
  cardBottom.classList = 'container-center card-bottom';
  memeCard.append(cardBottom);

  // Add range slider with event listener
  const rangeHolder = document.createElement('div');
  rangeHolder.setAttribute('class', 'font-change');
  cardBottom.append(rangeHolder);

  const labelForSlider = document.createElement('label');
  labelForSlider.for = 'font';
  labelForSlider.innerText = 'Font size';
  rangeHolder.append(labelForSlider);

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.name = 'font';
  slider.min = ".25";
  slider.max = "2";
  slider.value = "1";
  slider.step = ".25";
  rangeHolder.append(slider);
  slider.addEventListener('input', changeFontSize);

  // Add color picker
  const colorHolder = document.createElement('div');
  colorHolder.classList = 'font-change';
  cardBottom.append(colorHolder);

  const labelForColor = document.createElement('label');
  labelForColor.for = 'color';
  labelForColor.innerText = 'Font color';
  colorHolder.append(labelForColor);

  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.name = 'color';
  colorPicker.value = '#a52a2a';

  colorHolder.append(colorPicker);
  colorPicker.addEventListener('input', changeFontColor);


  // Add delete button with event listener
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete Me";
  cardBottom.append(deleteButton);
  deleteButton.addEventListener('click', deleteMeme);

}

function deleteMeme(e) {
  e.target.parentNode.parentNode.remove();
}

function changeFontSize(e) {
  const text = e.target.parentNode.parentNode.previousElementSibling.lastChild;
  const value = e.target.value * 1.5;
  text.style.fontSize = `${value}rem`;
}
function changeFontColor(e) {
  const text = e.target.parentNode.parentNode.previousElementSibling.lastChild;
  text.style.color = e.target.value;
}



