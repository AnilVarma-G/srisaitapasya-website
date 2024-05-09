

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
// Add event listener to each menu item
const menuItems = document.querySelectorAll('.nav__link a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navLink.classList.add('hide'); // Close the menu bar
  });
});

// JavaScript function to toggle the visibility of the navigation menu
function toggleMenu(event) {
  var navItems = document.getElementById("navItems1");
  if (navItems.style.display === "block") {
      navItems.style.display = "none";
  } else {
      navItems.style.display = "block";
  }
  event.stopPropagation(); // Prevents the click event from propagating to the document
}

// Close the navigation menu when clicking outside of it
document.addEventListener("click", function(event) {
  var navItems = document.getElementById("navItems1");
  if (event.target !== navItems && event.target.parentNode !== navItems) {
      navItems.style.display = "none";
  }
});





var firstComment = document.getElementById("firstComment");



function move(){

}

document.addEventListener('DOMContentLoaded', function() {
   const closeButtons = document.querySelectorAll('.close-btn');
   const modal = document.getElementById('myModal');
   const modalImg = document.getElementById('modalImg');
   const span = document.getElementsByClassName('close-modal')[0];

   closeButtons.forEach(button => {
     button.addEventListener('click', function() {
       const galleryItem = this.parentNode;
       const imgSrc = galleryItem.querySelector('img').src;
       modal.style.display = 'block';
       modalImg.src = imgSrc;
     });
   });

   span.onclick = function() {
     modal.style.display = 'none';
   }

   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = 'none';
     }
   }
 });

 document.getElementById("contactForm").addEventListener("submit", function (event) {
   event.preventDefault();
   document.getElementById("confirmation").style.display = "block";
   document.getElementById("contactForm").reset();
   setTimeout(function () {
       document.getElementById("confirmation").style.display = "none";
   }, 3000); // Hide the confirmation message after 3 seconds
});

document.getElementById("submitButton").addEventListener("click", function() {
  this.classList.add("green");
})
document.getElementById("confirmation").style.display = "block";

document.getElementById('up-arrow').addEventListener('click', function() {
  var arrowContainer = document.querySelector('.up-arrow-container');
  arrowContainer.style.display = 'none'; // Hide the arrow container
  
  setTimeout(function() {
    arrowContainer.style.display = 'block'; // Show the arrow container after 5 seconds
  }, 3000);
});


// Add event listener for the button click
document.getElementById("showConfirmation").addEventListener("click", function() {
  // Show the confirmation
  document.getElementById("confirmation").style.display = "block";

  // Trigger typing animation after a delay
  setTimeout(function() {
      document.querySelector(".text").classList.add("typing-animation");
  }, 300); // Delay before starting typing animation
});


 // Adjust scroll position to account for fixed header
 function adjustScrollPosition() {
  if (window.location.hash) {
    var targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      var headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  }
}

// Call the function on page load to adjust initial scroll position
window.addEventListener('load', adjustScrollPosition)