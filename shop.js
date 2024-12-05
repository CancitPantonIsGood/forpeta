$(document).ready(function() {
    // Handle the "Shop Now!" button click
    $('#shop-now-button').click(function(event) {
      event.preventDefault(); // Prevent default anchor navigation
      
      // Show the black overlay
      $('#overlay').fadeIn(500, function() {
        // After the overlay fades in, fade out the body content
        $('body').fadeOut(1000, function() {
          // After fading out, redirect to shop1.html
          window.location.href = 'shop1.html'; // Navigate to the new page
        });
      });
    });
  });

  $(document).ready(function () {
    // Credits hover functionality
    $(".menu a:contains('Credits')").hover(
      function (event) {
        // Show the tooltip with fade-in animation
        $("#credits-tooltip")
          .html(
            "Made by: <br> Doctolero, Jhon Christopher <br> Masubay, Mark Joshua <br> Aludo, Cindy Angeline <br> Delcarmen, Aivan"
          )
          .css({
            top: $(this).offset().top + $(this).outerHeight(),
            left:
              $(this).offset().left -
              $("#credits-tooltip").outerWidth() / 2 +
              $(this).outerWidth() / 2,
          })
          .stop(true, true)
          .fadeIn(300);
      },
      function () {
        // Hide the tooltip with fade-out animation
        $("#credits-tooltip").stop(true, true).fadeOut(300);
      }
    );
  
    // Contact hover functionality
    $(".menu a:contains('Contact')").hover(
      function (event) {
        // Show the tooltip with fade-in animation
        $("#contact-tooltip")
          .html(
            "Feel free to contact us:<br> + 012 345 6789<br> shopxpress@gmail.com"
          )
          .css({
            top: $(this).offset().top + $(this).outerHeight(),
            left:
              $(this).offset().left -
              $("#contact-tooltip").outerWidth() / 2 +
              $(this).outerWidth() / 2,
          })
          .stop(true, true)
          .fadeIn(300);
      },
      function () {
        // Hide the tooltip with fade-out animation
        $("#contact-tooltip").stop(true, true).fadeOut(300);
      }
    );

    $(".menu a:contains('Profile')").hover(
      function (event) {
        // Show the tooltip with fade-in animation
        $("#profile-tooltip")
          .html(
            "A shop dedicated for the best team of Leauge of Legends history<br> T1"
          )
          .css({
            top: $(this).offset().top + $(this).outerHeight(),
            left:
              $(this).offset().left -
              $("#profile-tooltip").outerWidth() / 2 +
              $(this).outerWidth() / 2,
          })
          .stop(true, true)
          .fadeIn(300);
      },
      function () {
        // Hide the tooltip with fade-out animation
        $("#profile-tooltip").stop(true, true).fadeOut(300);
      }
    );

  });

  document.querySelector("#profile-link").addEventListener("mouseover", function () {
    const tooltip = document.querySelector("#profile-tooltip");
    const rect = tooltip.getBoundingClientRect();
  
    // If the tooltip exceeds the right boundary
    if (rect.right > window.innerWidth) {
      tooltip.style.left = "auto";
      tooltip.style.right = "10px";
      tooltip.style.transform = "none";
    }
  
    // If the tooltip exceeds the left boundary
    if (rect.left < 0) {
      tooltip.style.left = "10px";
      tooltip.style.transform = "none";
    }
  });
  
  