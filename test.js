//get card items
var myCards = Array.from(document.querySelectorAll('.card'));
//get number of cards
var cardCount = myCards.length;
//set current card
var currentCard = 0;
// get previous and next button
var previousButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

//function remove all active class on card
function removeAllActive(){
  "use strict";
  myCards.forEach(function (item) {
    item.classList.remove('active-card', 'rotate-vert-center');
  });
}
//triger the checker function
 theChecker();
//previous button checker
function prevCard() {
  "use strict";
  if(previousButton.classList.contains('disabled')) {
    // do nothing
    return false;
  } else {
    currentCard--;
    theChecker();
  }
}
//next button function
function nextCard() {
  "use strict";
  if(nextButton.classList.contains('disabled')) {
    // do nothing
    return false;
  } else {
    currentCard++;
    theChecker();
  }
}
// handle click on next and previous button
previousButton.onclick=prevCard;
nextButton.onclick=nextCard;

//create the checker function
function  theChecker(){
  "use strict";
  //remove all active
     removeAllActive();
  //set active class on current card
  myCards[currentCard].classList.add('active-card', 'rotate-vert-center');
  
  //check if current card is the first
  if(currentCard === 0) {
    //add class on previous button
    previousButton.classList.add('disabled');
  } else {
    previousButton.classList.remove('disabled');
  }
 //check if last card
  if(currentCard === cardCount-1 ) {
    //add class on next button
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}