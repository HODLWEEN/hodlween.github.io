require('../css/app.scss');

require('jquery')
require('bootstrap')

// Redirects for qr codes and links so we can track marketing.
var pathname = window.location.pathname; // Returns path only (/path/example.html)
window.onload = function() {
	pathname === '/CLT' ? window.location.href = '/clt' : ''; // Redirect 
}

var tickers = document.querySelectorAll('[data-component="ticker"]');
tickers.forEach(initTicker);
	
function initTicker(ticker) {
	
	// Set the date we're counting down to
	var now = new Date().getTime();
	var countDownDate1 = new Date("Aug 22, 2022 00:00:00").getTime();
	var countDownDate2 = new Date("Sep 5, 2022 00:00:00").getTime();
	var countDownDate3 = new Date("Oct 3, 2022 00:00:00").getTime();
	var countDownDate4 = new Date("Oct 17, 2022 00:00:00").getTime();
	if (now < countDownDate1) {
		var countDownDate = countDownDate1;
		// const ticketprices = new Array({fullhodl:"$150.21", meatmeal:"$40.21", conf:"$100.21", party:"$60.21", partyvip:"$90.21"});
	}else if (now < countDownDate2) {
		var countDownDate = countDownDate2;
		// ticketprices = new Array({fullhodl:"$170.21", meatmeal:"$50.21", conf:"$120.21", party:"$80.21", partyvip:"$110.21"});
	}else if (now < countDownDate3) {
		var countDownDate = countDownDate3;
		// ticketprices = new Array({fullhodl:"$200.21", meatmeal:"$60.21", conf:"$150.21", party:"$100.21", partyvip:"$130.21"});
	}else if (now < countDownDate4) {
		var countDownDate = countDownDate4;
		// ticketprices = new Array({fullhodl:"$240.21", meatmeal:"$70.21", conf:"$180.21", party:"$120.21", partyvip:"$160.21"});
	}else {
		var countDownDate = countDownDate4;
		// ticketprices = new Array({fullhodl:"$290.21", meatmeal:"$80.21", conf:"$200.21", party:"$150.21", partyvip:"$190.21"});
	}
	// document.getElementById("fullhodl-price").innerHTML = ticketprices[1];
	// document.getElementById("meatmeal-price").innerHTML = ticketprices.meatmeal;
	// document.getElementById("conf-price").innerHTML = ticketprices.conf;
	// document.getElementById("party-price").innerHTML = ticketprices.party;
	// document.getElementById("partyvip-price").innerHTML = ticketprices.partyvip;

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
}

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