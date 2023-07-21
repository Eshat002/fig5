var navLinks = document.getElementsByClassName("nav-link");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        // Remove "active" class from all other elements
        for (let j = 0; j < navLinks.length; j++) {
            if (j !== i) {
                navLinks[j].classList.remove("active");
            }
        }


        navLinks[i].classList.add("active");
    });
}



// $(document).ready(function () {
$("#owl-carousel1").owlCarousel({

    // nav: true next prev
    dots: true,
    // loop: true,
    responsive: {
        0: {
            items: 1
        },

        1059.20: {
            items: 2
        }
    },

});






$("#owl-carousel2").owlCarousel({
    items: 2,
    // nav: true next prev
    dots: true,


});




// $(document).ready(function () {
//     // Get the maximum height among all product detail sections
//     var maxHeight = 0;
//     $('.section6-product-detail').each(function () {
//         var height = $(this).outerHeight();
//         if (height > maxHeight) {
//             maxHeight = height;
//         }
//     });

//     // Set the maximum height to all product detail sections
//     $('.section6-product-detail').css('height', maxHeight + 'px');
// });



//  


