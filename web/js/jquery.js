// JavaScript to use jQuery for adding an event listener to each "Add to Cart" button
$(document).ready(function() {
    $('.btn-primary').click(function(event) {
        event.preventDefault(); // Prevent the default button action
        var productTitle = $(this).closest('.card-body').find('.card-title').text();
        alert('Added to Cart: ' + productTitle);
    });
});


// jQuery Script for Image Zoom
$(document).ready(function() {
    // Scale up for zoom effect
    $('.card-img-top').hover(function() {
        // On mouse enter
        $(this).css({
            'transform': 'scale(1.2)',
            'transition': 'transform 0.5s ease'
        });
    }, function() {
        // On mouse leave
        $(this).css({
            'transform': 'scale(1)',
            'transition': 'transform 0.5s ease'
        });
    });
});