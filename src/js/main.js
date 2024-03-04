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
    var topValue = 0;

    this.style.position = 'relative';
    this.style.top = (topValue - 20) + 'px';
    this.classList.remove('shadow-lg');
    this.classList.add('shadow');
  });
}