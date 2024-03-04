// Import our custom CSS
import '../styles/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Get all the elements with the class 'card'
var cards = document.querySelectorAll('.clickable');

// Loop through each card
for (var i = 0; i < cards.length; i++) {
  // Add a click event listener to each card
  cards[i].addEventListener('click', function() {
    var topValue = parseInt(this.style.top, 10);

    // Move the card up by 10 pixels
    this.style.position = 'relative';
    this.style.top = (topValue - 10) + '10px';


  });
}