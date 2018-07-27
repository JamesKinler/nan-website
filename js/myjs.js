$(document).ready(function () {
  //scroll magic
var controller = new ScrollMagic.Controller();


new ScrollMagic.Scene({
        triggerElement: ".firstsection",
        triggerHook: "onLeave",
    })
    .setPin(".firstsection")
    .addTo(controller);


    new ScrollMagic.Scene({
      triggerElement: ".secondsection",
      triggerHook: "onLeave",
    })
    .setPin(".secondsection")
    .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: ".thirdsection",
    triggerHook: "onLeave"
  })
  .setPin(".thirdsection")
  .addTo(controller);


  new ScrollMagic.Scene({
        triggerElement: '.third_header',
        // triggerHook: 'onBottom',
        offset: 10,
    })
    // .addIndicators()
    // .setPin('.counter')
    .on('enter', function(e){
      setTimeout(function(){
    odometer.innerHTML = 14558;
      }, 1000)
    })


    .addTo(controller);

    new ScrollMagic.Scene({
          triggerElement: '.third_header',
          // triggerHook: 'onBottom',
          offset: 10,
      })
      // .addIndicators()
      // .setPin('.counter')
      .on('enter', function(e){
        setTimeout(function(){
      $('#odometer2').html(12134);
        }, 1000)
      })


      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".fourthsection",
        triggerHook: "onLeave"
      })
      .setPin(".fourthsection")
      .addTo(controller);


      $('.raindrop').ripples({
			resolution: 512,
			dropRadius: 10, //px
			perturbance: 0.01,

		});

	setInterval(function() {
		var $el = $('.raindrop');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.08 + Math.random() * 0.08;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);;





});
