

function toggleMenu() {
  var navItems = document.getElementById("nav__link1");
  if (navItems.style.display === "block" || window.innerWidth >= 768) {
    navItems.style.display = "none";
  } else {
    navItems.style.display = "block";
  }
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



document.addEventListener('DOMContentLoaded', function() {
  const callLink = document.getElementById('callLink');

  callLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const phoneNumber = '+918340947374'; // Replace with your desired phone number
    const phoneLink = 'tel:' + encodeURIComponent(phoneNumber);

    window.location.href = phoneLink;
  });
});



// Add event listener to hamburger menu
document.querySelector('.hamburger').addEventListener('click', function() {
  // Toggle class to show/hide menu items
  document.querySelector('.nav__link').classList.toggle('show');
});
