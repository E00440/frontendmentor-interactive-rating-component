

let buttonColor;

function buttonClicked(number) {
  console.log(number);
  buttonColor = number;
}

function submitButton() {
  let firstPart = document.querySelector('.first-part');

  firstPart = firstPart.classList.add('first-part-removed');

  let secondPart = document.querySelector('.second-part');

  secondPart = secondPart.classList.add('second-part-added');

  let selectedText = document.querySelector('.js-text').innerHTML;

  selectedText = `${buttonColor}`
  
  document.querySelector('.first-text-II').innerHTML = `You selected ${selectedText} out of 5`

}