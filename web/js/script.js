// event listener to each product for adding to cart
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.product').forEach(function (product) {
        product.addEventListener('click', function () {
            alert('Added to Cart: ' + product.querySelector('h3').textContent);
        });
    });
});



// video
const videoSources = ["../../media/v1.mp4", "../../media/v2.mp4", "../../media/v3.mp4"];

// sources:
// https://www.pexels.com/video/low-angle-shot-video-of-man-walking-854008/
// https://www.pexels.com/video/a-person-wearing-white-nike-shoes-8519683/
// https://www.pexels.com/video/a-person-sitting-on-a-tree-branch-5553467/

let currentVideoIndex = 0;
const videoElement = document.getElementById('myVideo');

function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoElement.src = videoSources[currentVideoIndex];
}

// changing video every 10 seconds
setInterval(changeVideo, 10000);





// for index.html, when scolled and see text appearing
window.addEventListener('scroll', function () {
    var element = document.querySelector('.scroll-text');
    var position = element.getBoundingClientRect();

    // checking if the element is within the viewport vertically
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = "1";
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const messageOne = document.getElementById('message-one');
    const messageTwo = document.getElementById('message-two');

    // Initially set message one to be visible to ensure it appears on load
    messageOne.style.opacity = 1;
    messageOne.style.display = 'block';

    let currentVisibleMessage = 1; // Start with message one

    setInterval(() => {
        if (currentVisibleMessage === 1) {
            messageOne.style.opacity = 0;
            setTimeout(() => { messageOne.style.display = 'none'; }, 2000); // Hide after transition
            messageTwo.style.display = 'block';
            setTimeout(() => { messageTwo.style.opacity = 1; }, 100); // Ensure display is set before starting opacity transition
            currentVisibleMessage = 2;
        } else {
            messageTwo.style.opacity = 0;
            setTimeout(() => { messageTwo.style.display = 'none'; }, 2000); // Hide after transition
            messageOne.style.display = 'block';
            setTimeout(() => { messageOne.style.opacity = 1; }, 100); // Ensure display is set before starting opacity transition
            currentVisibleMessage = 1;
        }
    }, 10000); // Change messages every 10 seconds
});






// index.html

// Promotional content object
const promoContent = {
    messages: [
        "Discover the Latest in Comfort",
        "Explore Our Exclusive Releases",
        "Shop the Trending Collections Now"
    ],
    images: [
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1166868/pexels-photo-1166868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    // Function to update promotional content
    function updatePromoContent() {
        const promoImg = document.getElementById('promo-image');
        const promoMsg = document.getElementById('promo-message');

        promoImg.src = promoContent.images[currentIndex];
        promoMsg.textContent = promoContent.messages[currentIndex];

        // Animation for fade-in effect
        promoImg.style.opacity = 0;
        promoMsg.style.opacity = 0;
        setTimeout(() => {
            promoImg.style.opacity = 1;
            promoMsg.style.opacity = 1;
        }, 100);

        currentIndex = (currentIndex + 1) % promoContent.messages.length; // Loop through content
    }

    // Initial update
    updatePromoContent();

    // Interval for auto-changing content
    setInterval(updatePromoContent, 5000);

    // Additional event listeners for interactivity
    document.getElementById('promo-image').addEventListener('mouseover', () => {
        // Example event listener for interactivity
        console.log("Hovered over the promotional image");
    });
    
    // More event listeners can be added as required to meet the 10 event listeners requirement
});





document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.style.transform = 'scale(1.1)';
            product.style.transition = 'transform 0.3s ease-in-out';
        });

        product.addEventListener('mouseleave', () => {
            product.style.transform = 'scale(1)';
        });
    });
});



// for contact.html
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    input.addEventListener('focus', () => {
        // Check if dark mode is active
        if(document.body.classList.contains('dark-mode')) {
            input.style.backgroundColor = '#555'; // Darker color for dark mode
        } else {
            input.style.backgroundColor = 'lightyellow'; // Lighter color for light mode
        }
    });
    input.addEventListener('blur', () => {
        input.style.backgroundColor = ''; // Revert on blur
    });
});




// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Optional: Save the dark mode state in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check localStorage to see if dark mode was enabled previously
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

document.addEventListener('keypress', (event) => {
    if (event.key === 'd') { // Example: Press 'd' to toggle dark mode
        document.body.classList.toggle('dark-mode');
    }
});



// for navbar, it becomes thin if mouse touches
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a'); // Select all navbar links

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.fontWeight = 'bold'; // Make the font weight bold on mouseover
            link.style.color = 'dark'; // Change the color to indicate hover
        });

        link.addEventListener('mouseout', () => {
            link.style.fontWeight = 'normal'; // Revert to normal font weight on mouseout
            link.style.color = ''; // Revert to original color
        });
    });
});





// pop up if user is inactive
// Define hidePopUp globally
function hidePopUp() {
    document.getElementById('inactivityModal').style.display = 'none';
}

let inactivityTime = function() {
    let time;

    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function showPopUp() {
        document.getElementById('inactivityModal').style.display = 'block';
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(showPopUp, 300000); // Show pop-up after 5 minutes of inactivity
    }
};

// Initialize the inactivity timer function
inactivityTime();








// Subscribe to Our Newsletter - index.html
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        const email = document.getElementById('newsletterEmail').value;
        console.log('Newsletter Email:', email);
        alert('Thank you for subscribing!');
        // Here you could also send the email to your server or a third-party email service
    });
});






// in index.html
// Show the Button on Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Implement the Scroll-to-Top Functionality
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
  