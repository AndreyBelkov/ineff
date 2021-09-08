$(function() {

	let tabsBtn = document.querySelectorAll('.tab-btn');
	let tabsItems = document.querySelectorAll('.tab-content-item');

	tabsBtn.forEach(function(item) {
		item.addEventListener('click', function() {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute('data-tab');
			let currentTab = document.querySelector(tabId);

			if(! currentBtn.classList.contains('active')) {
				tabsBtn.forEach(function(item) {
					item.classList.remove('active');
				});

				tabsItems.forEach(function(item) {
					item.classList.remove('active');
				});

				currentBtn.classList.add('active');
				currentTab.classList.add('active');
			};

		});
	});

	document.querySelector('.tab-btn').click();


	let download = document.querySelector('.form-btn');
	let downloadLink = document.querySelector('.download');

	download.onclick = function() {
		downloadLink.click();
	};





	$('.eight-inner-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: true,
	  arrows: false,
	  responsive: [
	  {
	  	breakpoint: 769,
	  	settings: {
	  		slidesToShow: 2,
	  		slidesToScroll: 2,
	  	}
	  },
	  {
	  	breakpoint: 481,
	  	settings: {
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  	}
	  }
	  ]
	});


	$('.ninth-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
	  {
	  	breakpoint: 1025,
	  	settings: {
	  		slidesToShow: 3,
	  		slidesToScroll: 1,
	  		dots: true,
	  		arrows: false
	  	} 
	  },
	  {
	  	breakpoint: 769,
	  	settings: {
	  		slidesToShow: 2,
	  		slidesToScroll: 1,
	  		dots: true,
	  		arrows: false
	  	}
	  },
	  {
	  	breakpoint: 481,
	  	settings: {
	  		slidesToShow: 2,
	  		slidesToScroll: 1,
	  		dots: true,
	  		arrows: false
	  	}
	  }
	  ]
	});


	let toTop = document.querySelector('.to-top');

	toTop.onclick = function() {
		scrollTo(0,0);
	};



	let cosultation = document.querySelector('.cosultation');
	let body = document.querySelector('body');
	let popupFirst = document.querySelector('.popup-first');
	let popupSecond = document.querySelector('.popup-second');
	let popupCloses = document.querySelectorAll('.popup-close');
	let applications = document.querySelectorAll('.application');

	cosultation.onclick = function() {
		body.classList.add('overflow');
		popupFirst.classList.add('block');
	};

	for(let popupClose of popupCloses) {
		popupClose.onclick = function() {
		body.classList.remove('overflow');
		popupFirst.classList.remove('block');
		popupSecond.classList.remove('block');
		};
	};
	

	for(let application of applications) {
		application.onclick = function(evt) {
			evt.preventDefault();
			popupSecond.classList.add('block');
			body.classList.add('overflow');
		};
	};

	let burgerMenu = document.querySelector('.burger-menu');
	let mainMenu = document.querySelector('.main-menu');

	burgerMenu.onclick = function() {
		mainMenu.classList.toggle('mobile');
	};


















});
