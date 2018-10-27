$(function() {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_activ');
	});
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_activ');
	});
	var arrow = $('.downArrow a');
	arrow.on('click',function (event) { 
		event.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('html, body').animate( { scrollTop: destination }, 1100 );
	  });
	var button =$('.features');
	button.on('click',function (event) { 
		event.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('html, body').animate( { scrollTop: destination }, 1100 );
	});
	var sbutton =$('.exploreF');
	sbutton.on('click',function (event) { 
		event.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('html, body').animate( { scrollTop: destination }, 1100 );
	});
	const modalWindow = document.querySelector('.md-modal')
	document.querySelectorAll('.getStarted').forEach(a => {
	  a.addEventListener('click', () => {
		modalWindow.classList.add('md-show')
	  })
	})
	document.querySelector('.md-close').onclick = () => {
	  modalWindow.classList.remove('md-show')
	}
});
