require('../css/app.scss');

require('jquery')
require('bootstrap')


	// Set the date we're counting down to
	var countDownDate = new Date("Aug 22, 2022 00:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get today's date and time
	  var now = new Date().getTime();
	    
	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;
	    
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	  // Output the result in an element with id="demo"
	  document.getElementById("countdown-ticker").innerHTML = 
	  "<div><span>" + days + "</span><span>days</span>" + "</div>" +
	  "<div><span>" + hours + "</span><span>hours</span>" + "</div>" +
	  "<div><span>" + minutes + "</span><span>minutes</span>" + "</div>" +
	  "<div><span>" + seconds + "</span><span>seconds</span>" + "</div>";
	    
	  // If the count down is over, write some text 
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("countdown-ticker").innerHTML = 
	  "<div><span>" + 0 + "</span><span>days</span>" + "</div>" +
	  "<div><span>" + 0 + "</span><span>hours</span>" + "</div>" +
	  "<div><span>" + 0 + "</span><span>minutes</span>" + "</div>" +
	  "<div><span>" + 0 + "</span><span>seconds</span>" + "</div>";
	  }
	}, 1000);


	
	var slideshows = document.querySelectorAll('[data-component="slideshow"]');
	slideshows.forEach(initSlideShow);

	function initSlideShow(slideshow) {

		var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

		var index = 0, time = 5000;
		slides[index].classList.add('active');

		setInterval( () => {
			slides[index].classList.remove('active');
			
			index++;
			if (index === slides.length) index = 0;

			slides[index].classList.add('active');

		}, time);
	}