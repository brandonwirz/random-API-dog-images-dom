'use strict';

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function checkValidForm(numVal) {
  if(numVal > 0 && numVal <= 50) {
    return true;
  }else {
    return false;
  }
}

function displayResults(responseJson) {
  const imageList = responseJson.message;
  console.log(imageList);
  let imageUrls = "";

  for (let i = 0; i < imageList.length; i++) {
    imageUrls += `<img src="${imageList[i]}" alt="Generated dog image # ${i + 1}" class="loadedImages">`;
  }
  // console.log(imageUrl);
  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const result = $('#input-num').val();
    if(checkValidForm(result)) {
      console.log(`Results to retrieve: ${result}`);
      getDogImage(result);
    }
    else {
      alert('Sorry, you must enter a number between 1 and 50. Try again.')
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
