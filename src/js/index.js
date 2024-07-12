    const swiper = new Swiper('.swiper-container-1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

    });
    const swiper1 = new Swiper('.swiper-container-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        pagination: {
            el: '.swiper-pagination',
        },

    });
    const swiper2 = new Swiper('.swiper-container-3', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        pagination: {
            el: '.swiper-pagination',
        },

    });

  // Dropdown
  $('#drop').hide();
  $('#more_btn_l').click(function(event) {
      event.stopPropagation(); 
      $('#drop').slideToggle('slow');
  });
  // Dropdown
  $('#drop').hide();
  $('#more_btn_s').click(function(event) {
      event.stopPropagation(); 
      $('#drop').slideToggle('slow');
  });
  
  // Flip Card 1
  document.getElementById('card').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
  // Flip Card 2
  document.getElementById('card2').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });
  document.getElementById('card2').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
    // Flip Card 3
  document.getElementById('card3').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card3').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
    // Flip Card 4
  document.getElementById('card4').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card4').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
    // Flip Card 5
  document.getElementById('card5').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card5').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
    // Flip Card 6
  document.getElementById('card6').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card6').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
    // Flip Card 7
  document.getElementById('card7').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card7').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });
    // Flip Card 8
  document.getElementById('card8').addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(180deg)';
  });

  document.getElementById('card8').addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(0deg)';
  });

  
$( function() {
    $(".datepicker").datepicker();
});

// Image full screen
const images = document.querySelectorAll('.gallery-image');

images.forEach(image => {
  image.addEventListener('click', () => {
    // Create a modal or lightbox container
    const modal = document.createElement('div');
    modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'z-50');

    // Create an image element for the full picture
    const fullImage = document.createElement('img');
    fullImage.src = image.src;
    fullImage.alt = image.alt;
    fullImage.classList.add('max-h-screen', 'max-w-full', 'cursor-pointer');

    // Append the full image to the modal
    modal.appendChild(fullImage);

    // Add the modal to the body
    document.body.appendChild(modal);

    // Disable scrolling on the background content
    document.body.style.overflow = 'hidden';

    // Add a click event listener to close the modal
    modal.addEventListener('click', () => {
      // Remove the modal
      document.body.removeChild(modal);
      
      // Enable scrolling on the background content
      document.body.style.overflow = 'auto';
    });

    // Prevent clicks on the image from closing the modal
    fullImage.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
});






