'use strict'
window.onload = () =>{
	$('.testimonials-slider').slick({
	  slidesToShow: 1,
	  dots:true,
    dotsClass: "my-dots",
	  infinite: false,
	  arrows: false,
	  centerMode: true

	})
}